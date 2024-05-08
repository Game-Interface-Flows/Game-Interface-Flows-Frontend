import { IFlowPreview } from "../models/flow_preview";
import { RootStore } from "./RootStore";
import { BaseStore } from "./BaseStore";
import { action, makeObservable, observable, runInAction } from "mobx";
import { FlowService } from "../services/FlowService";
import { IFlow } from "../models/flow";
import { ILike } from "../models/like";

export class FlowStore extends BaseStore {
    nextUrl: string | null = "/flows";
    flows: IFlowPreview[] = [];
    currentFlow: IFlow | null = null;
    isLoading = false;
    isPending = false;
    error = "";
    service: FlowService = new FlowService();

    constructor(rootStore: RootStore) {
        super(rootStore);
        makeObservable(this, {
            nextUrl: observable,
            flows: observable,
            currentFlow: observable,
            isLoading: observable,
            isPending: observable,
            error: observable,
            loadFlows: action,
            loadMoreFlows: action,
        });
    }

    loadFlows = async () => {
        if (this.isLoading) {
            this.isPending = true;
            return;
        }
        runInAction(() => {
            this.flows = [];
        });
        this.isLoading = true;
        const genres = this.rootStore.genresStore.selectedItemsNames;
        const platforms = this.rootStore.platformsStore.selectedItemsNames;
        const sort = this.rootStore.sortingStore.getSelectedOptionName();
        const order = this.rootStore.sortingStore.getSelectedOrder();
        const fetchedFlows = await this.service.fetchFlows(
            genres,
            platforms,
            sort,
            order
        );

        runInAction(() => {
            if (fetchedFlows) {
                this.flows = fetchedFlows.results;
                this.nextUrl = fetchedFlows.next;
            } else {
                this.error = "Failed to fetch flows.";
            }
            this.isLoading = false;
            if (this.isPending) {
                this.isPending = false;
                this.loadMoreFlows();
            }
        });
    };

    loadMoreFlows = async () => {
        if (!this.nextUrl) return;
        if (this.isLoading) {
            this.isPending = true;
            return;
        }
        this.isLoading = true;
        const fetchedFlows = await this.service.fetchFlowsByUrl(this.nextUrl);

        runInAction(() => {
            if (fetchedFlows) {
                this.flows = [...this.flows, ...fetchedFlows.results];
                this.nextUrl = fetchedFlows.next;
            } else {
                this.error = "Failed to fetch more flows.";
            }
            this.isLoading = false;
            if (this.isPending) {
                this.isPending = false;
                this.loadMoreFlows();
            }
        });
    };

    likeFlow = async (flowId: number, like: boolean): Promise<ILike> => {
        const fetchedLike = await this.service.fetchFlowLike(flowId, like);

        return fetchedLike;
    };

    loadCurrentFlowById = async (flowId: number) => {
        const fetchedFlow = await this.service.fetchFlowById(flowId);

        runInAction(() => {
            this.currentFlow = fetchedFlow;
        });
    };

    submitFlow = async () => {
        return;
    };
}
