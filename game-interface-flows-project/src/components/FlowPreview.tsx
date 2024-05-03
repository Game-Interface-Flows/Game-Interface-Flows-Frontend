import React from "react";
import { Link } from "react-router-dom";

import { IFlowPreview } from "../models/flow_preview";

interface FlowProps {
	flow: IFlowPreview;
}

export function FlowPreview({ flow }: FlowProps) {
	return (
		<div className="card h-100 rounded-0">
			<div className="row h-100 g-0">
				<div className="col-md-4">
					<div className="h-100 overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
						<img
							src={flow.flow_thumbnail_url}
							className="img-fluid h-100 object-fit-cover"
							alt={flow.title}
						/>
					</div>
				</div>
				<div className="col-md-8">
					<Link
						to={`/flows/${flow.id}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<div className="card-body p-2">
							<h5 className="card-title">{flow.title}</h5>
							<div className="row">
								<div className="col-6">
									<button className="btn-custom btn-custom-primary">
										<small>Likes: {flow.total_likes}</small>
									</button>
								</div>
								<div className="col-6">
									<p className="card-text">
										<small>{flow.date}</small>
									</p>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
