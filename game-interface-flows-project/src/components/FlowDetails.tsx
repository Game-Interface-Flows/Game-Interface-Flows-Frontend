import React from "react";

import { IFlow } from "../models/flow";

import { Comment } from "./Comment";

interface FlowDetailsProps {
	flow: IFlow | null;
}

export function FlowDetails({ flow }: FlowDetailsProps) {
	return (
		<div className="container-fluid bg-dark py-3">
			<h2 className="text-white text-uppercase">{flow?.title}</h2>
			<p className="text-white">{flow?.description}</p>
			<h2 className="text-white text-uppercase">comments</h2>
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
