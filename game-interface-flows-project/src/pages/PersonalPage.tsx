import React from "react";
import { FlowsGrid } from "../components/FlowsGrid";
import { useStore } from "../stores/storeContext";
import { observer } from "mobx-react-lite";

const PersonalPage: React.FC = observer(() => {
    const { flowsStore } = useStore();

    return (
        <>
            <div className="row w-100 g-0 mx-3">
                <div className="col-md-3 pt-2">
                    <div className="border border-2 border rounded p-2 px-4">
                        hello
                    </div>
                </div>
                <div className="col-md-9 pt-2">
                    <div className="mx-2 border border-2 border-white pt-2">
                        <h3 className="text-uppercase pt-1">Flows</h3>
                        <FlowsGrid
                            flows={flowsStore.flows}
                            isLoading={flowsStore.isLoading}
                            loadInitialFlows={flowsStore.loadMyFlows}
                            loadMoreFlows={flowsStore.loadMoreFlows}
                        />
                    </div>
                </div>
            </div>
        </>
    );
});

export default PersonalPage;
