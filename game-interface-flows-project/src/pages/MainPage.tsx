import React from "react";
import { FlowsGrid } from "../components/FlowsGrid";
import { GenreFilter } from "../components/GenreFilter";
import { ApplyFilteringBytton } from "../components/ApplyFilteringButton";
import { PlatformFilter } from "../components/PlatformFilter";
import { SortingOptions } from "../components/SortingOptions";
import { useStore } from "../stores/storeContext";
import { observer } from "mobx-react-lite";

const MainPage: React.FC = observer(() => {
    const { flowsStore } = useStore();

    return (
        <>
            <div className="row w-100 g-0 mx-3">
                <div className="col-md-3 pt-2">
                    <div className="border border-2 border rounded p-2 px-4">
                        <div className="row py-1">
                            <h3 className="text-uppercase p-0">Order</h3>
                            <SortingOptions />
                        </div>
                        <div className="row py-1">
                            <h3 className="text-uppercase p-0">Platforms</h3>
                            <PlatformFilter />
                        </div>
                        <div className="row py-1">
                            <h3 className="text-uppercase p-0">Genres</h3>
                            <GenreFilter />
                        </div>
                        <div className="row py-1">
                            <ApplyFilteringBytton />
                        </div>
                    </div>
                </div>
                <div className="col-md-9 pt-2">
                    <div className="mx-2 border border-2 border-white pt-2">
                        <h3 className="text-uppercase pt-1">Flows</h3>
                        <FlowsGrid
                            flows={flowsStore.flows}
                            isLoading={flowsStore.isLoading}
                            loadInitialFlows={flowsStore.loadFlows}
                            loadMoreFlows={flowsStore.loadMoreFlows}
                            nextUrl={flowsStore.nextUrl}
                            showPersonalInfo={false}
                        />
                    </div>
                </div>
            </div>
        </>
    );
});

export default MainPage;
