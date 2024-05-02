import { IFrame } from "./frame";

export interface IFlow {
    id: number,
    title: string,
    description: string,
    screens: [IFrame],
}