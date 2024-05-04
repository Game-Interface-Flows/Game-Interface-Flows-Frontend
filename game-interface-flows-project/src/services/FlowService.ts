import { axiosErrorHandler } from "../api/error";
import request from "../api/request";
import { IFlow } from "../models/flow";
import { IFlows } from "../models/flows";
import { ILike } from "../models/like";

export class FlowService {
	path = "/flows";

	async fetchFlows(
		genres: string[] = [],
		platforms: string[] = [],
		sort = "",
		order = ""
	): Promise<IFlows | null> {
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
			console.log(response.data);
			return response.data;
		} catch (error) {
			axiosErrorHandler<IFlows[]>((error) => {
				console.log(error);
			});
			return null;
		}
	}

	async fetchFlowsByUrl(url: string) {
		try {
			const response = await request<IFlows>("GET", url);
			return response.data;
		} catch (error) {
			axiosErrorHandler<IFlows[]>((error) => {
				console.log(error);
			});
			return null;
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

	async fetchFlowLike(flowId: number, like: boolean): Promise<ILike> {
		const method = like ? "POST" : "DELETE";

		try {
			const response = await request<ILike>(method, `/flows/${flowId}/likes/`);
			return response.data;
		} catch (error) {
			axiosErrorHandler<ILike>((error) => {
				console.log(error);
			});
			throw new Error("Failed to like/dislike flow");
		}
	}
}
