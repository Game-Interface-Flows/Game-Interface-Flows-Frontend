import { IUser } from "./user";

export interface IComment {
    id: number;
    author: IUser;
    text: string;
}
