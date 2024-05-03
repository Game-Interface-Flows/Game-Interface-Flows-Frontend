import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";

export const SortingOptions: React.FC = observer(() => {
	const { sortingStore } = useStore();

	const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		sortingStore.setSelectedOptionId(Number(event.target.value));
	};

	const toggleSortDirection = () => {
		sortingStore.toggleSortDirection();
	};

	return (
		<div>
			<div className="row">
				<select
					className="form-control text-uppercase"
					value={sortingStore.selectedOptionId}
					onChange={handleSortingChange}
				>
					{sortingStore.options.map((option) => (
						<option key={option.id} value={option.id}>
							{option.name}
						</option>
					))}
				</select>
			</div>
			<div className="row">
				<button className="btn btn-outline-secondary" onClick={toggleSortDirection}>
					{sortingStore.isAscending ? "↓" : "↑"}
				</button>
			</div>
		</div>
	);
});
