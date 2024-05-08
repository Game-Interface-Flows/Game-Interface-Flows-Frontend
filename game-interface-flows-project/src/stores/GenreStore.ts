import { IGenre } from "../models/genre";
import { RootStore } from "./RootStore";
import { GenreService } from "../services/GenreService";
import { BaseFilterStore } from "./BaseFilterStore";

export class GenreStore extends BaseFilterStore<IGenre> {
    constructor(rootStore: RootStore) {
        super(rootStore, new GenreService());
    }
}
