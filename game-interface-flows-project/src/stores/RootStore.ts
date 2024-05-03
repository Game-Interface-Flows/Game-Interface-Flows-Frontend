import { GenreStore } from "./GenreStore";
import { FlowStore } from "./FlowStore";
import { AuthStore } from "./AuthStore";
import { PlatformStore } from "./PlatformStore";

export class RootStore {
	genresStore: GenreStore;
	platformsStore: PlatformStore;
	flowsStore: FlowStore;
	authStore: AuthStore;

	constructor() {
		this.genresStore = new GenreStore(this);
		this.platformsStore = new PlatformStore(this);
		this.flowsStore = new FlowStore(this);
		this.authStore = new AuthStore(this);
	}
}

export const rootStore = new RootStore();
