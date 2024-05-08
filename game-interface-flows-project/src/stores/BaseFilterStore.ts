import { IFilterItem } from "../models/filter_item";
import { OptionType } from "../models/option";
import { BaseService } from "../services/BaseService";
import { BaseStore } from "./BaseStore";
import { RootStore } from "./RootStore";
import { action, makeObservable, observable, runInAction } from "mobx";

export abstract class BaseFilterStore<T extends IFilterItem> extends BaseStore {
    items: T[] = [];
    selectedItems: number[] = [];
    options: OptionType[] = [];
    service: BaseService<T>;

    constructor(rootStore: RootStore, service: BaseService<T>) {
        super(rootStore);
        this.service = service;
        makeObservable(this, {
            items: observable,
            selectedItems: observable,
            options: observable,
            toggleItemSelection: action,
            loadItems: action,
        });
    }

    toggleItemSelection(id: number) {
        if (this.selectedItems.includes(id)) {
            this.selectedItems = this.selectedItems.filter(
                (item) => item !== id
            );
        } else {
            this.selectedItems.push(id);
        }
    }

    get selectedItemsNames(): string[] {
        return this.items
            .filter((item) => this.selectedItems.includes(item.id))
            .map((item) => item.name);
    }

    async loadItems() {
        const fetchedItems = await this.service.fetchAll();

        runInAction(() => {
            this.items = fetchedItems;
            this.options = this.convertFilterItemsToOptions(this.items);
        });
    }

    convertFilterItemsToOptions(items: IFilterItem[]): OptionType[] {
        return items.map((item) => ({
            value: item.name,
            label: item.name.toUpperCase(),
        }));
    }
}
