import { IFlowPreview } from "./flow_preview";

export interface IFlows {
	results: [IFlowPreview];
	next: string;
}
