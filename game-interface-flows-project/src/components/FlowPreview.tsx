import React from "react";
import { Link } from "react-router-dom";

import { IFlowPreview } from "../models/flow_preview";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";
import { Helmet } from "react-helmet";

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
			<Helmet>
				<link rel="preconnect" href="http://storage.yandexcloud.net" />
			</Helmet>
			<Link
				className="h-100"
				to={`/flows/${flow.id}`}
				style={{ textDecoration: "none", color: "inherit" }}
			>
				<div className="row h-100 g-0">
					<div className="col-6 h-100 overflow-hidden">
						<div style={{ aspectRatio: "1 / 1" }}>
							<img
								loading="lazy"
								src={flow.flow_thumbnail_url}
								className="h-100 w-100 object-fit-cover"
								alt={flow.title}
							/>
						</div>
					</div>
					<div className="col-6 h-100">
						<div className="card-body card-border h-100 d-flex flex-column p-2">
							<div className="row flex-fill">
								<p className="card-title mb-0 fs-4 fw-bold">{flow.title}</p>
								<div>
									{flow.platforms.map((platform) => (
										<span
											key={platform.id}
											className="badge bg-custom-primary me-1 text-uppercase"
										>
											{platform.name}
										</span>
									))}
								</div>
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
					</div>
				</div>
			</Link>
		</div>
	);
});
