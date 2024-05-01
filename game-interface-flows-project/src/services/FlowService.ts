import { axiosErrorHandler } from "../api/error";
import request from "../api/request";
import { IFlowPreview } from "../models/flow_preview";
import { IFlows } from "../models/flows";

export class FlowService {
	path = "/flows";

	async fetchFlows(genres: string[] = []): Promise<IFlowPreview[]> {
		try {
			const params = genres.length > 0 ? { genre: genres } : undefined;
			const response = await request<IFlows, { genre: string[] }>("GET", this.path, { params });
			return response.data.results; 
		} catch (error) {
			axiosErrorHandler<IFlows[]>(error => {
				console.log(error);
			});  
			return []; 
		}
	}
}
