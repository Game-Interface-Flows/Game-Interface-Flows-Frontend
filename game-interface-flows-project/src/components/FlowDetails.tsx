import React from "react";

import { IFlow } from "../models/flow";

interface FlowDetailsProps {
    flow: IFlow | null
} 

export function FlowDetails({flow}: FlowDetailsProps) {
	return (
		<div>
			<h3>{flow?.title}</h3>
			<p>{flow?.description}</p>
		</div>
	);
}