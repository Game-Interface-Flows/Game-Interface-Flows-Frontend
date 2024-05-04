import { BaseStore } from "./BaseStore";
import { storeConfig } from "./storeConfig";

export class RootStore {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: BaseStore | any;

	constructor() {
		this.registerStores(storeConfig);
	}

	private registerStores(
		stores: Record<string, new (root: RootStore) => BaseStore>
	) {
		Object.keys(stores).forEach((storeKey) => {
			this[storeKey] = new stores[storeKey](this);
		});
	}
}

export const rootStore = new RootStore();
