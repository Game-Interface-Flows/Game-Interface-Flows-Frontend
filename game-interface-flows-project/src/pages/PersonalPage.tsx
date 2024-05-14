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
                        <div className="row py-1">
                            <h2 className="text-uppercase p-0">Info</h2>
                            <p className="p-0">
                                Here you can find information about different
                                flow statuses.
                            </p>
                            <h3 className="text-uppercase p-0">Status</h3>
                            <ul>
                                <li>Verified — flow is approved.</li>
                                <li>
                                    On Moderation — flow will be checked be
                                    admins.
                                </li>
                            </ul>
                            <h3 className="text-uppercase p-0">Process</h3>
                            <ul>
                                <li>Completed — flow is built.</li>
                                <li>In Process — flow is being built.</li>
                                <li>
                                    Fail — flow is corrupted and will be
                                    deleted.
                                </li>
                            </ul>
                            <h3 className="text-uppercase p-0">Privacy</h3>
                            <ul>
                                <li>Public — flow is visible for everybody.</li>
                                <li>Private — flow is visible only for you.</li>
                            </ul>
                        </div>
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
                            showPersonalInfo={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
});

export default PersonalPage;
