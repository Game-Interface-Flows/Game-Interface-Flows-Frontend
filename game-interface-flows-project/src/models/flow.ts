import { IComment } from "./comment";
import { IGenre } from "./genre";
import { IPlatform } from "./platform";
import { IScreen } from "./screen";
import { IScreenSharableProperties } from "./screen_properties";
import { IUser } from "./user";

export interface IFlow {
    id: number;
    title: string;
    source: string;
    date: string;
    screens: [IScreen];
    screens_properties: IScreenSharableProperties;
    comments: [IComment];
    author: IUser;
    genres: [IGenre];
    platforms: [IPlatform];
}
