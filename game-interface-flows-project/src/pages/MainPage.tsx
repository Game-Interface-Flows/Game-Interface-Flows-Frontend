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
				<div className="col-md-3">
					<div className="row p-2">
						<h3>Order</h3>
						<SortingOptions />
					</div>
					<div className="row p-2">
						<h3>Platforms</h3>
						<PlatformFilter />
					</div>
					<div className="row p-2">
						<h3>Genres</h3>
						<GenreFilter />
					</div>
					<div className="row p-2">
						<ApplyFilteringBytton />
					</div>
				</div>
				<div className="col-md-9 p-2">
					<h3>Flows</h3>
					<FlowsGrid />
				</div>
			</div>
		</div>
	);
}

export default MainPage;