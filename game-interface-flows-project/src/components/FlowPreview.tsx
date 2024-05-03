import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import { IFlowPreview } from "../models/flow_preview";

interface FlowProps {
	flow: IFlowPreview;
}

export function FlowPreview({ flow }: FlowProps) {
	return (
		<div className="card h-100">
			<div className="row g-0">
				<div className="col-md-4">
					<img
						src={flow.flow_thumbnail_url}
						className="img-fluid"
						alt={flow.title}
					/>
				</div>
				<div className="col-md-8">
					<Link
						to={`/flows/${flow.id}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<div className="card-body">
							<h5 className="card-title">{flow.title}</h5>
							<button className="btn btn-primary">{flow.total_likes}</button>
							<p className="card-text">
								<small className="text-muted">{flow.date}</small>
							</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
