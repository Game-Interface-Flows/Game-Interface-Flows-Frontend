import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { FlowPreview } from "../components/FlowPreview";
import { useStore } from "../stores/storeContext";
import { IFlowPreview } from "../models/flow_preview";

export const FlowsGrid: React.FC = observer(() => {
	const { flowsStore, authStore } = useStore();
	const loaderRef = useRef(null);

	useEffect(() => {
		flowsStore.loadFlows();
	}, [flowsStore, authStore.token]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && flowsStore.nextUrl) {
					flowsStore.loadMoreFlows();
				}
			},
			{ threshold: 1.0 }
		);

		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}

		return () => {
			if (loaderRef.current) {
				observer.unobserve(loaderRef.current);
			}
		};
	}, [flowsStore]);

	return (
		<>
			<div className="row row-cols-1 row-cols-md-2 g-4">
				{flowsStore.flows.map((flow: IFlowPreview) => (
					<div key={flow.id} className="col">
						<FlowPreview flow={flow} />
					</div>
				))}
			</div>
			{flowsStore.isLoading && (
				<div className="d-flex justify-content-center">
					<div className="spinner-border mt-5" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
			<div ref={loaderRef} />
		</>
	);
});
