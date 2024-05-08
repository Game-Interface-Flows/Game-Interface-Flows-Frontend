import { IPlatform } from "../models/platform";
import { RootStore } from "./RootStore";
import { BaseFilterStore } from "./BaseFilterStore";
import { PlatformService } from "../services/PlatformService";

export class PlatformStore extends BaseFilterStore<IPlatform> {
    constructor(rootStore: RootStore) {
        super(rootStore, new PlatformService());
    }
}
