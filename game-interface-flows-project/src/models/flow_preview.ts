import { IGenre } from "./genre";

export interface IFlowPreview {
	id: number;
	title: string;
	description: string;
	date: string;
	total_likes: number;
	flow_thumbnail_url: string;
	is_liked: boolean;
	genres: [IGenre];
}
