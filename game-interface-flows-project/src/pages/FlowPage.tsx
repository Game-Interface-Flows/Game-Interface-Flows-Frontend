import React, { useEffect } from "react";
import Flow from "../components/Flow";
import { useStore } from "../stores/storeContext";
import { useParams } from "react-router-dom";
import { FlowDetails } from "../components/FlowDetails";
import { observer } from "mobx-react-lite";
import NotFound from "../components/NotFound";
import { LoadingSpinner } from "../components/LoadingSpinner";

const FlowPage: React.FC = observer(() => {
    const { flowsStore } = useStore();
    const { flowId } = useParams<{ flowId: string }>();

    useEffect(() => {
        if (flowId) {
            flowsStore.loadCurrentFlowById(parseInt(flowId, 10));
        }
    }, [flowId, flowsStore]);

    return (
        <>
            {flowsStore.currentFlow ? (
                <>
                    {flowsStore.currentFlow.process === "Completed" ? (
                        <div className="row w-100 g-0">
                            <div className="col-sm-12 col-md-9 d-flex p-0">
                                <Flow flow={flowsStore.currentFlow} />
                            </div>
                            <div className="col-sm-0 col-md-3 d-flex p-0">
                                <FlowDetails flow={flowsStore.currentFlow} />
                            </div>
                        </div>
                    ) : (
                        <div className="flex-fill d-flex align-items-center justify-content-center">
                            {flowsStore.currentFlow.process === "Fail" && (
                                <div
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    There was an exception durning building
                                    process, the flow will be deleted soon.
                                </div>
                            )}
                            {flowsStore.currentFlow.process ===
                                "In Process" && (
                                <div
                                    className="alert alert-warning"
                                    role="alert"
                                >
                                    Flow is under constructions. Building
                                    process can take up to 20-30 mins.
                                </div>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <>
                    {flowsStore.isLoading === true ? (
                        <LoadingSpinner />
                    ) : (
                        <NotFound />
                    )}
                </>
            )}
        </>
    );
});

export default FlowPage;
