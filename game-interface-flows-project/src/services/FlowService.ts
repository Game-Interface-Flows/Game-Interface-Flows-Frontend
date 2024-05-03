import { axiosErrorHandler } from "../api/error";
import request from "../api/request";
import { IFlow } from "../models/flow";
import { IFlowPreview } from "../models/flow_preview";
import { IFlows } from "../models/flows";

export class FlowService {
	path = "/flows";

	async fetchFlows(
		genres: string[] = [],
		platforms: string[] = [],
		sort = "",
		order = ""
	): Promise<IFlowPreview[]> {
		try {
			const params: {
				genre?: string[];
				platform?: string[];
				sort?: string;
				order?: string;
			} = {};
			if (genres.length > 0) {
				params.genre = genres;
			}
			if (platforms.length > 0) {
				params.platform = platforms;
			}
			if (sort) {
				params.sort = sort;
			}
			if (order) {
				params.order = order;
			}
			const response = await request<IFlows, typeof params>("GET", this.path, {
				params,
			});
			console.log(response.data.results);
			return response.data.results;
		} catch (error) {
			axiosErrorHandler<IFlows[]>((error) => {
				console.log(error);
			});
			return [];
		}
	}

	async fetchFlowById(flowId: number): Promise<IFlow> {
		try {
			const response = await request<IFlow>("GET", `/flows/${flowId}`);
			console.log(response.data);
			return response.data;
		} catch (error) {
			axiosErrorHandler<IFlow>((error) => {
				console.log(error);
			});
			throw new Error("Failed to fetch flow");
		}
	}
}
