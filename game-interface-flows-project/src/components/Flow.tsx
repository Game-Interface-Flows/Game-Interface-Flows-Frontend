import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import "../App.css";
import { IFlow } from "../models/flow";

interface FlowContentProps {
    flow: IFlow | null,
}

export function Flow({flow}: FlowContentProps)  {
	return (
		<div className="viewport-container flow-background overflow-hidden">
			<TransformWrapper minScale={0.1} maxScale={3} limitToBounds={false}>
				<TransformComponent>
					<div style={{ width: "100000px", height: "100000px" }}>
						{flow?.screens.map(screen => (
							<img
								key={screen.id}
								src={screen.image}
								alt={`Image ${screen.id}`}
								style={{ position: "absolute", left: screen.position_x * 580, top: screen.position_y * 370 , width: 570, height: 360}}
							/>
						))}
					</div>
				</TransformComponent>
			</TransformWrapper>
		</div>
	);
}

export default Flow;