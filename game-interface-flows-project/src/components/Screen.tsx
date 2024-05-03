import React from "react";

import { IScreen } from "../models/screen";
import { ArcherElement } from "react-archer";
import { AnchorPositionType } from "react-archer/lib/types";
import { IScreenSharableProperties } from "../models/screen_properties";

interface ScreenProps {
	screen: IScreen;
	propeties: IScreenSharableProperties;
}

export function Frame({ screen, propeties }: ScreenProps) {
	return (
		<ArcherElement
			key={screen.id}
			id={String(screen.id)}
			relations={screen.connections_out.map((conn) => ({
				targetId: String(conn.screen_in),
				targetAnchor: conn.target_anchor as AnchorPositionType,
				sourceAnchor: conn.source_anchor as AnchorPositionType,
				startMarker: conn.bidirectional,
			}))}
		>
			<img
				key={screen.id}
				src={screen.image}
				alt={`Image ${screen.id}`}
				style={{
					position: "absolute",
					left: screen.position_x * (propeties.width + propeties.offset_x),
					top: screen.position_y * (propeties.height + propeties.offset_y),
					width: propeties.width,
					height: propeties.height,
				}}
			/>
		</ArcherElement>
	);
}
