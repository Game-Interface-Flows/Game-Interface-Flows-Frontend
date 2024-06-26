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

export const GenericFilter: React.FC<FilterProps<IFilterItem>> = observer(
    ({ store }) => {
        useEffect(() => {
            store.loadItems();
        }, [store]);

        function handleCheckboxChange(id: number) {
            store.toggleItemSelection(id);
        }

        return (
            <div className="list-group p-0">
                {store.items.map((item) => (
                    <div key={item.id} className="list-group-item">
                        <label className="form-check-label text-uppercase">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={store.selectedItems.includes(item.id)}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                            <span className="extra-space">{item.name}</span>
                        </label>
                    </div>
                ))}
            </div>
        );
    }
);
