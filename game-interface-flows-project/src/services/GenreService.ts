import { IGenre } from "../models/genre";
import { BaseService } from "./BaseService";

export class GenreService extends BaseService<IGenre> {
	protected mockedData: IGenre[] = [
		{
			id: 1,
			name: "action",
		},
		{
			id: 2,
			name: "puzzle",
		},
	];
	protected path = "/genres";
}
