import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { FlowPreview } from "../components/FlowPreview";
import { useStore } from "../stores/storeContext";

export const FlowsGrid: React.FC = observer(() => {
	const { flowsStore } = useStore();

	useEffect(() => {
		flowsStore.loadFlows();
	}, [flowsStore]);


	return (
		<div className="row row-cols-1 row-cols-md-2 g-4">
			{flowsStore.flows.map((flow) => (
				<div key={flow.id} className="col">
					<FlowPreview flow={flow} />
				</div>
			))}
		</div>
	);
});