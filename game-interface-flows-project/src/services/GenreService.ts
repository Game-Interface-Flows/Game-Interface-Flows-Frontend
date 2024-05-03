import { IGenre } from "../models/genre";
import { BaseService } from "./BaseService";

export class GenreService extends BaseService<IGenre> {
	protected path = "/genres";
}
