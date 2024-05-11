import React from "react";

import { IFlow } from "../models/flow";
import { LikeButton } from "./LikeButton";

interface FlowDetailsProps {
    flow: IFlow | null;
}

export function FlowDetails({ flow }: FlowDetailsProps) {
    return (
        <div className="container-fluid bg-dark text-white py-3">
            <h2 className="text-uppercase mb-0">
                {flow?.title} ({flow?.id})
            </h2>
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
            <div className="mb-4">
                <h3 className="text-uppercase">Details</h3>
                {flow?.source ? (
                    <a href={flow.source}>{flow.source}</a>
                ) : (
                    <p>No source</p>
                )}
                <p>Total Screens: {flow?.total_screens}</p>
                <p>Average Connectivity: {flow?.average_connectivity}</p>
                {flow && <LikeButton flow={flow} />}
            </div>
            <div>
                <h3 className="text-uppercase">Editing</h3>
                <p>
                    You cannot edit a flow here but soon a plugin for Figma will
                    be released.
                </p>
            </div>
        </div>
    );
}
