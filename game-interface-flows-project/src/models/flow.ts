import { IFlowPreview } from "./flow_preview";
import { IScreen } from "./screen";
import { IScreenSharableProperties } from "./screen_properties";
import { IUser } from "./user";

export interface IFlow extends IFlowPreview {
    source: string;
    screens: [IScreen];
    screens_properties: IScreenSharableProperties;
    author: IUser;
}
