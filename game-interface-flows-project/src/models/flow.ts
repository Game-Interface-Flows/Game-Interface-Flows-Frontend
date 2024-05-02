import { IScreen } from "./screen";
import { IScreenSharableProperties } from "./screen_properties";

export interface IFlow {
    id: number,
    title: string,
    description: string,
    screens: [IScreen],
    screens_properties: IScreenSharableProperties
}