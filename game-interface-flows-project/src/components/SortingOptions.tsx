import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";
import { ISortingOption } from "../models/sorting_option";

export const SortingOptions: React.FC = observer(() => {
	const { sortingStore } = useStore();

	const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		sortingStore.setSelectedOptionId(Number(event.target.value));
	};

	const toggleSortDirection = () => {
		sortingStore.toggleSortDirection();
	};

	return (
		<div className="row p-0 m-0">
			<div className="col-6 p-0 pe-1">
				<select
					className="form-control text-uppercase h-100"
					value={sortingStore.selectedOptionId}
					onChange={handleSortingChange}
				>
					{sortingStore.options.map((option: ISortingOption) => (
						<option key={option.id} value={option.id}>
							{option.name}
						</option>
					))}
				</select>
			</div>
			<div className="col-6 p-0 ps-1">
				<button
					className="btn-custom btn-custom-primary w-100"
					onClick={toggleSortDirection}
				>
					{sortingStore.isAscending ? "↓" : "↑"}
				</button>
			</div>
		</div>
	);
});
