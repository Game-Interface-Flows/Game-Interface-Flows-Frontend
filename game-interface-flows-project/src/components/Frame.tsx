import React from "react";

import { IFrame } from "../models/frame";

interface FrameProps {
    frame: IFrame
}

export function Frame({frame}: FrameProps) {
	return (
		<div>
			<img key={frame.id} src={frame.image}>
			</img>
		</div>
	);
}