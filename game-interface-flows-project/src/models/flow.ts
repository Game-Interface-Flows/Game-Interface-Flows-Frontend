import { IFlowPreview } from "./flow_preview";
import { IScreen } from "./screen";
import { IScreenSharableProperties } from "./screen_properties";
import { IUser } from "./user";

export interface IFlow extends IFlowPreview {
    source: string;
    total_screens: string;
    average_connectivity: string;
    max_x: number;
    max_y: number;
    screens: [IScreen];
    screens_properties: IScreenSharableProperties;
    author: IUser;
}
