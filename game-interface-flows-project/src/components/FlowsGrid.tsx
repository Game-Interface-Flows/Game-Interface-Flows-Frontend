import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { FlowPreview } from "../components/FlowPreview";
import { useStore } from "../stores/storeContext";
import { IFlowPreview } from "../models/flow_preview";

export const FlowsGrid: React.FC = observer(() => {
    const { flowsStore, authStore } = useStore();
    const loaderRef = useRef(null);
    const isNullOrEmpty =
        flowsStore.flows === null || flowsStore.flows.length === 0;

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
            <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4">
                {flowsStore.flows.map((flow: IFlowPreview) => (
                    <div key={flow.id} className="col">
                        <FlowPreview flow={flow} />
                    </div>
                ))}
            </div>
            {flowsStore.isLoading && (
                <div className="d-flex h-100 justify-content-center">
                    <div
                        className="spinner-border align-self-center text-primary"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {isNullOrEmpty && !flowsStore.isLoading && (
                <div className="d-flex flex-column h-100 justify-content-center">
                    <p className="text-center">
                        Strange... no flows are found.
                    </p>
                </div>
            )}
            <div ref={loaderRef} />
        </>
    );
});
