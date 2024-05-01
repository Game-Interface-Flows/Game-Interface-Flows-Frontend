import { makeObservable } from "mobx";
import { RootStore } from "./RootStore";

export abstract class BaseStore {
	protected rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
		makeObservable(this, {});
	}
}
