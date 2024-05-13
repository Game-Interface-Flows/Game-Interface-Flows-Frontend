import { IGenre } from "./genre";
import { IPlatform } from "./platform";

export interface IFlowPreview {
    id: number;
    title: string;
    date: string;
    process: string;
    status: string;
    visibility: string;
    total_likes: number;
    flow_thumbnail_url: string;
    is_liked: boolean;
    genres: [IGenre];
    platforms: [IPlatform];
}
