import React from "react";
import { Link } from "react-router-dom";

import { IFlowPreview } from "../models/flow_preview";
import { Helmet } from "react-helmet";
import { LikeButton } from "./LikeButton";

interface FlowProps {
    flow: IFlowPreview;
}

export function FlowPreview({ flow }: FlowProps) {
    return (
        <div className="card h-100">
            <Helmet>
                <link rel="preconnect" href="http://storage.yandexcloud.net" />
            </Helmet>
            <Link
                className="h-100"
                to={`/flows/${flow.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <div className="row h-100 g-0">
                    {flow.flow_thumbnail_url && (
                        <div className="col-6 h-100 d-flex align-items-center justify-content-center rounded-start overflow-hidden">
                            <img
                                loading="lazy"
                                src={flow.flow_thumbnail_url}
                                width={200}
                                height={200}
                                alt={flow.title}
                            />
                        </div>
                    )}
                    <div
                        className={`h-100 ${flow.flow_thumbnail_url ? "col-6" : "col-12"}`}
                    >
                        <div className="card-body card-border h-100 d-flex flex-column p-2">
                            <div className="row flex-fill">
                                <p className="card-title text-uppercase mb-0 fs-5">
                                    {flow.title}
                                </p>
                                <div>
                                    {flow.platforms.map((platform) => (
                                        <span
                                            key={platform.id}
                                            className="badge badge-small bg-light text-dark me-1 text-uppercase"
                                        >
                                            {platform.name}
                                        </span>
                                    ))}
                                    {flow.genres.map((genre) => (
                                        <span
                                            key={genre.id}
                                            className="badge badge-small bg-custom-primary me-1 text-uppercase"
                                        >
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="row flex-fill align-items-end">
                                <LikeButton flow={flow} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
