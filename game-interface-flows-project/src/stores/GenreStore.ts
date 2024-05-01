import { IGenre } from "../models/genre";
import { RootStore } from "./RootStore";
import { GenreService } from "../services/GenreService";
import { BaseStore } from "./BaseStore";
import { action, makeObservable, observable, runInAction } from "mobx";

export class GenreStore extends BaseStore {
	genres: IGenre[] = [];
	selectedGenres: number[] = [];
	service: GenreService = new GenreService();

	constructor(rootStore: RootStore) {
		super(rootStore);
		makeObservable(this, {
			genres: observable,
			selectedGenres: observable,
			toggleGenreSelection: action,
			loadGenres: action
		});
	}

	toggleGenreSelection(id: number) {
		if (this.selectedGenres.includes(id)) {
			this.selectedGenres = this.selectedGenres.filter(item => item !== id);
		} else {
			this.selectedGenres.push(id);
		}
	}

	get selectedGenreNames(): string[] {
		return this.genres.filter(genre => this.selectedGenres.includes(genre.id)).map(genre => genre.name);
	}

	async loadGenres() {
		const fetchedGenres = await this.service.fetchAllGenres();

		runInAction(() => {
			this.genres = fetchedGenres;
		});
	}
}
