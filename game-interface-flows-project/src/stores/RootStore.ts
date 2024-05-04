import { GenreStore } from "./GenreStore";
import { FlowStore } from "./FlowStore";
import { AuthStore } from "./AuthStore";
import { PlatformStore } from "./PlatformStore";
import { SortingStore } from "./SortingStore";
import { ToastStore } from "./ToastStore";

export class RootStore {
	genresStore: GenreStore;
	platformsStore: PlatformStore;
	sortingStore: SortingStore;
	flowsStore: FlowStore;
	authStore: AuthStore;
	toastStore: ToastStore;

	constructor() {
		this.genresStore = new GenreStore(this);
		this.platformsStore = new PlatformStore(this);
		this.sortingStore = new SortingStore(this);
		this.flowsStore = new FlowStore(this);
		this.authStore = new AuthStore(this);
		this.toastStore = new ToastStore(this);
	}
}

export const rootStore = new RootStore();
