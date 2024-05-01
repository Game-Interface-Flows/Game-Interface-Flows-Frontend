import { IFrame } from "./frame";

export interface IFlow {
    id: number,
    title: string,
    frames: [IFrame],
}