import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { FlowPreview } from "../components/FlowPreview";
import { IFlowPreview } from "../models/flow_preview";
import { LoadingSpinner } from "./LoadingSpinner";

interface FlowsGridProps {
    flows: IFlowPreview[];
    isLoading: boolean;
    loadInitialFlows: () => void;
    loadMoreFlows: () => void;
    nextUrl?: string;
    showPersonalInfo: boolean;
}

export const FlowsGrid: React.FC<FlowsGridProps> = observer(
    ({
        flows,
        isLoading,
        loadInitialFlows,
        loadMoreFlows,
        nextUrl,
        showPersonalInfo,
    }) => {
        const loaderRef = useRef(null);

        useEffect(() => {
            loadInitialFlows();
        }, [loadInitialFlows]);

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && nextUrl) {
                        loadMoreFlows();
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
        }, [loadMoreFlows, nextUrl]);

        const isNullOrEmpty = flows === null || flows.length === 0;

        return (
            <>
                {!isLoading && (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4">
                        {flows.map((flow: IFlowPreview) => (
                            <div key={flow.id} className="col">
                                <FlowPreview
                                    flow={flow}
                                    showStatus={showPersonalInfo}
                                />
                            </div>
                        ))}
                    </div>
                )}
                {isLoading === true && <LoadingSpinner />}
                {isNullOrEmpty && isLoading === false && (
                    <div className="d-flex flex-column h-100 justify-content-center">
                        <p className="text-center mt-5">nothing :(</p>
                    </div>
                )}
                <div ref={loaderRef} />
            </>
        );
    }
);
