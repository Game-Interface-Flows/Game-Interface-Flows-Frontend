import { GenreStore } from "./GenreStore";
import { FlowStore } from "./FlowStore";
import { AuthStore } from "./AuthStore";

export class RootStore {
	genresStore: GenreStore;
	flowsStore: FlowStore;
	authStore: AuthStore;

	constructor() {
		this.genresStore = new GenreStore(this);
		this.flowsStore = new FlowStore(this);
		this.authStore = new AuthStore(this);
	}
}

export const rootStore = new RootStore();
