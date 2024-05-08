import { IConnection } from "./connection";

export interface IScreen {
    id: number;
    image: string;
    position_x: number;
    position_y: number;
    connections_out: [IConnection];
}
