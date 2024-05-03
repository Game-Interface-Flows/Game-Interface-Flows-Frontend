import { axiosErrorHandler } from "../api/error";
import request from "../api/request";

export abstract class BaseService<T> {
	protected abstract path: string;

	async fetchAll(): Promise<T[]> {
		try {
			const response = await request<T[]>("GET", this.path);
			return response.data;
		} catch (error) {
			axiosErrorHandler<T[]>((error) => {
				console.log(error);
			});
			return [];
		}
	}
}
