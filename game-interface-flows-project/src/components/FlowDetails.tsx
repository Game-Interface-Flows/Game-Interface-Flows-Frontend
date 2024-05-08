import React from "react";

import { IFlow } from "../models/flow";
import { LikeButton } from "./LikeButton";

interface FlowDetailsProps {
    flow: IFlow | null;
}

export function FlowDetails({ flow }: FlowDetailsProps) {
    return (
        <div className="container-fluid bg-dark text-white py-3">
            <h1 className="text-uppercase mb-0">{flow?.title}</h1>
            <div className="mb-2">
                {flow?.platforms.map((platform) => (
                    <span
                        key={platform.id}
                        className="badge bg-light text-dark me-1 text-uppercase"
                    >
                        {platform.name}
                    </span>
                ))}
                {flow?.genres.map((genre) => (
                    <span
                        key={genre.id}
                        className="badge bg-light text-dark me-1 text-uppercase"
                    >
                        {genre.name}
                    </span>
                ))}
            </div>
            <p>
                by {flow?.author.username}, {flow?.date}
            </p>
            {flow?.source ? (
                <a href={flow.source}>{flow.source}</a>
            ) : (
                <p>No source</p>
            )}
            <p>Total Screens: 0</p>
            <p>Average Connectivity: 0</p>
            {flow && <LikeButton flow={flow} />}
        </div>
    );
}
