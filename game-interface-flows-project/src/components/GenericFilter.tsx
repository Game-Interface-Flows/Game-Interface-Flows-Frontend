import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { IFilterItem } from "../models/filter_item";

interface FilterProps<T extends IFilterItem> {
    store: {
        items: T[];
        selectedItems: number[];
        loadItems: () => void;
        toggleItemSelection: (id: number) => void;
    };
}

export const GenericFilter: React.FC<FilterProps<IFilterItem>> = observer(({ store }) => {
	useEffect(() => {
		store.loadItems();
	}, [store]);

	function handleCheckboxChange(id: number) {
		store.toggleItemSelection(id);
	}

	return (
		<div>
			<div className="list-group">
				{store.items.map(item => (
					<div key={item.id} className="list-group-item">
						<label className="form-check-label">
							<input
								className="form-check-input"
								type="checkbox"
								checked={store.selectedItems.includes(item.id)}
								onChange={() => handleCheckboxChange(item.id)}
							/>
							{item.name}
						</label>
					</div>
				))}
			</div>
		</div>
	);
});
