import React from "react";
import { Link } from "react-router-dom";

import { IFlowPreview } from "../models/flow_preview";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";

interface FlowProps {
	flow: IFlowPreview;
}

export const FlowPreview: React.FC<FlowProps> = observer(({ flow }) => {
	const { flowsStore, authStore } = useStore();

	const handleButtonClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		event.stopPropagation();

		flowsStore.likeFlow(flow.id, !flow.is_liked);
	};

	return (
		<div className="card h-100 rounded-0">
			<div className="row h-100 g-0">
				<div className="col-md-6 h-100 overflow-hidden">
					<div className="w-100 overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
						<img
							src={flow.flow_thumbnail_url}
							className="img-fluid h-100 object-fit-cover overflow-hidden"
							alt={flow.title}
						/>
					</div>
				</div>
				<div className="col-md-6 h-100">
					<Link
						to={`/flows/${flow.id}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						<div className="card-body h-100 d-flex flex-column p-2">
							<div className="row flex-fill">
								<h5 className="card-title mb-0">{flow.title}</h5>
								<div>
									{flow.genres.map((genre) => (
										<span
											key={genre.id}
											className="badge bg-custom-primary me-1 text-uppercase"
										>
											{genre.name}
										</span>
									))}
								</div>
							</div>
							<div className="row flex-fill align-items-end">
								<div>
									<button
										className={`btn-custom btn-custom-primary w-100 ${flow.is_liked ? "btn-liked" : ""}`}
										onClick={handleButtonClick}
										disabled={!authStore.token}
									>
										Likes: {flow.total_likes}
									</button>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
});
