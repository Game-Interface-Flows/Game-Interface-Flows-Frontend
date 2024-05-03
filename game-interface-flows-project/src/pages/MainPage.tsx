import React from "react";
import { FlowsGrid } from "../components/FlowsGrid";
import { GenreFilter } from "../components/GenreFilter";
import { ApplyFilteringBytton } from "../components/ApplyFilteringButton";
import { PlatformFilter } from "../components/PlatformFilter";
import { SortingOptions } from "../components/SortingOptions";

export function MainPage() {
	return (
		<div className="container-fluid min-vh-100">
			<div className="row">
				<div className="col-md-3 py-2 flow-background">
					<div className="row px-3 py-1">
						<h3 className="text-uppercase p-0 bg-white">Order</h3>
						<SortingOptions />
					</div>
					<div className="row px-3 py-1">
						<h3 className="text-uppercase p-0 bg-white">Platforms</h3>
						<PlatformFilter />
					</div>
					<div className="row px-3 py-1">
						<h3 className="text-uppercase p-0 bg-white">Genres</h3>
						<GenreFilter />
					</div>
					<div className="row px-3 py-1">
						<ApplyFilteringBytton />
					</div>
				</div>
				<div className="col-md-9 py-2 pe-4">
					<h3 className="text-uppercase pt-1">Flows</h3>
					<FlowsGrid />
				</div>
			</div>
		</div>
	);
}

export default MainPage;
