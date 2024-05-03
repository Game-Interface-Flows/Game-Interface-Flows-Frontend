import React from "react";

import { IFlow } from "../models/flow";

import { Comment } from "./Comment";

interface FlowDetailsProps {
    flow: IFlow | null
} 

export function FlowDetails({flow}: FlowDetailsProps) {
	return (
		<div className="container-fluid p-1">
			<h3>{flow?.title}</h3>
			<p>{flow?.description}</p>
			<div className="row d-flex justify-content-center">
				<div className="col-12">
					{flow?.comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))}
				</div>
			</div>
		</div>
	);
}