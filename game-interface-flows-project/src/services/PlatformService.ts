import { IPlatform } from "../models/platform";
import { BaseService } from "./BaseService";

export class PlatformService extends BaseService<IPlatform> {
	protected path = "/platforms";
}
