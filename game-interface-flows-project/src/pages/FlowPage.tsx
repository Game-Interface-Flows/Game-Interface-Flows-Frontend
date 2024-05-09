import React, { useEffect, useState } from "react";
import Flow from "../components/Flow";
import { useStore } from "../stores/storeContext";
import { useParams } from "react-router-dom";
import { FlowDetails } from "../components/FlowDetails";
import { observer } from "mobx-react-lite";
import NotFound from "../components/NotFound";

const FlowPage: React.FC = observer(() => {
    const { flowsStore } = useStore();
    const { flowId } = useParams<{ flowId: string }>();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (flowId) {
            flowsStore.loadCurrentFlowById(parseInt(flowId, 10));
        }
        setLoading(false);
    }, [flowId, flowsStore]);

    return (
        <>
            <div className="container-fluid">
                {flowsStore.currentFlow ? (
                    <div className="row">
                        <div className="col-sm-12 col-md-9 d-flex p-0">
                            <Flow flow={flowsStore.currentFlow} />
                        </div>
                        {!isLoading && (
                            <div className="col-sm-0 col-md-3 d-flex p-0">
                                <FlowDetails flow={flowsStore.currentFlow} />
                            </div>
                        )}
                    </div>
                ) : (
                    <NotFound />
                )}
            </div>
        </>
    );
});

export default FlowPage;
