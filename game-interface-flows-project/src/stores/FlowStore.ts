import { IFlowPreview } from "../models/flow_preview";
import { RootStore } from "./RootStore";
import { BaseStore } from "./BaseStore";
import { action, makeObservable, observable, runInAction } from "mobx";
import { FlowService } from "../services/FlowService";
import { IFlow } from "../models/flow";

export class FlowStore extends BaseStore {
	flows: IFlowPreview[] = [];
	currentFlow: IFlow | null = null;
	isLoading = false;
	error = "";
	service: FlowService = new FlowService();

	constructor(rootStore: RootStore) {
		super(rootStore);
		makeObservable(this, {
			flows: observable,
			currentFlow: observable,
			isLoading: observable,
			error: observable,
			loadFlows: action
		});
	}

	loadFlows = async () => {
		const genres = this.rootStore.genresStore.selectedItemsNames;
		const platforms = this.rootStore.platformsStore.selectedItemsNames;
		const fetchedFlows = await this.service.fetchFlows(genres, platforms);

		runInAction(() => {
			this.flows = fetchedFlows;
		});
	};

	loadCurrentFlowById = async (flowId: number) => {
		const fetchedFlow = await this.service.fetchFlowById(flowId);

		runInAction(() => {
			this.currentFlow = fetchedFlow;
		});
	};
}
