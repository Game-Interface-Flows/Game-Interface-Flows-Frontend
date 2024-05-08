import { IPlatform } from "../models/platform";
import { BaseService } from "./BaseService";

export class PlatformService extends BaseService<IPlatform> {
    protected mockedData: IPlatform[] = [
        { id: 1, name: "pc" },
        { id: 2, name: "mobile" },
        { id: 3, name: "console" },
    ];
    protected path = "/platforms";
}
