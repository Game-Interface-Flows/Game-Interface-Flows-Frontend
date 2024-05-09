import React from "react";
import { FlowsGrid } from "../components/FlowsGrid";
import { GenreFilter } from "../components/GenreFilter";
import { ApplyFilteringBytton } from "../components/ApplyFilteringButton";
import { PlatformFilter } from "../components/PlatformFilter";
import { SortingOptions } from "../components/SortingOptions";

export function MainPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 pt-2">
                    <div className="border border-2 border rounded p-2">
                        <div className="row px-3 py-1">
                            <h3 className="text-uppercase p-0">Order</h3>
                            <SortingOptions />
                        </div>
                        <div className="row px-3 py-1">
                            <h3 className="text-uppercase p-0">Platforms</h3>
                            <PlatformFilter />
                        </div>
                        <div className="row px-3 py-1">
                            <h3 className="text-uppercase p-0">Genres</h3>
                            <GenreFilter />
                        </div>
                        <div className="row px-3 py-1">
                            <ApplyFilteringBytton />
                        </div>
                    </div>
                </div>
                <div className="col-md-9 pt-2">
                    <div className="border border-2 border-white pt-2">
                        <h3 className="text-uppercase pt-1">Flows</h3>
                        <FlowsGrid />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
