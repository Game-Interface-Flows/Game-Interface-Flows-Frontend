import { axiosErrorHandler } from "../api/error";
import request from "../api/request";
import { IGenre } from "../models/genre";

export class GenreService {
	path = "/genres";

	async fetchAllGenres(): Promise<IGenre[]> {
		try {
			const response = await request<IGenre[]>("GET", this.path);
			return response.data; 
		} catch (error) {
			axiosErrorHandler<IGenre[]>(error => {
				console.log(error);
			});  
			return []; 
		}
	}
}
