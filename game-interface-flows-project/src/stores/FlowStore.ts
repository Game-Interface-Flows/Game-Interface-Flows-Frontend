import { IFlowPreview } from "../models/flow_preview";
import { RootStore } from "./RootStore";
import { BaseStore } from "./BaseStore";
import { action, makeObservable, observable, runInAction } from "mobx";
import { FlowService } from "../services/FlowService";

export class FlowStore extends BaseStore {
	flows: IFlowPreview[] = [];
	isLoading = false;
	error = "";
	service: FlowService = new FlowService();

	constructor(rootStore: RootStore) {
		super(rootStore);
		makeObservable(this, {
			flows: observable,
			isLoading: observable,
			error: observable,
			loadFlows: action
		});
	}

	loadFlows = async () => {
		const genres = this.rootStore.genresStore.selectedGenreNames;
		const fetchedFlows = await this.service.fetchFlows(genres);

		runInAction(() => {
			this.flows = fetchedFlows;
		});
	};
}
