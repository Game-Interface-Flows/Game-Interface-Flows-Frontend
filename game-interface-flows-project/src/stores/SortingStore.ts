import { makeObservable, observable, action } from "mobx";
import { ISortingOption } from "../models/sorting_option";
import { RootStore } from "./RootStore";
import { BaseStore } from "./BaseStore";

export class SortingStore extends BaseStore {
	options: ISortingOption[] = [
		{ id: 1, name: "date" },
		{ id: 2, name: "likes" },
		{ id: 3, name: "title" },
	];
	selectedOptionId = 1;
	isAscending = true;

	constructor(rootStore: RootStore) {
		super(rootStore);
		makeObservable(this, {
			options: observable,
			selectedOptionId: observable,
			isAscending: observable,
			setSelectedOptionId: action,
			toggleSortDirection: action,
			getSelectedOptionName: action,
			getSelectedOrder: action,
		});
	}

	setSelectedOptionId(id: number) {
		this.selectedOptionId = id;
	}

	toggleSortDirection() {
		this.isAscending = !this.isAscending;
	}

	getSelectedOptionName(): string {
		const selectedOption = this.options.find(
			(option) => option.id === this.selectedOptionId
		);
		return selectedOption ? selectedOption.name : "";
	}

	getSelectedOrder(): string {
		return this.isAscending ? "asc" : "desc";
	}
}
