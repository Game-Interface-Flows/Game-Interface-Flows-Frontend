import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

import { IFlowPreview } from "../models/flow_preview";

interface FlowProps {
    flow: IFlowPreview
}

export function FlowPreview({flow}: FlowProps) {
	return (
		<div className="card h-100">
			<Link to={`/flows/${flow.id}`} style={{ textDecoration: "none", color: "inherit" }}>
				<img src={flow.flow_thumbnail_url} className="card-img-top" alt={flow.title} />
				<div className="card-body">
					<h5 className="card-title">{flow.title}</h5>
				</div>
			</Link>
		</div>
	);
}