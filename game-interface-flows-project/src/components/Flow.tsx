import React, { useEffect, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { IFlow } from "../models/flow";
import { ArcherContainer, ArcherContainerRef } from "react-archer";
import { Frame } from "./Screen";

interface FlowContentProps {
	flow: IFlow | null;
}

export function Flow({ flow }: FlowContentProps) {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		let maxWidth = 0;
		let maxHeight = 0;

		flow?.screens.forEach((screen) => {
			const currentWidth =
				(screen.position_x + 1) *
				(flow.screens_properties.width + flow.screens_properties.offset_x);
			const currentHeight =
				(screen.position_y + 1) *
				(flow.screens_properties.height + flow.screens_properties.offset_y);

			if (currentWidth > maxWidth) {
				maxWidth = currentWidth;
			}
			if (currentHeight > maxHeight) {
				maxHeight = currentHeight;
			}
		});

		setDimensions({ width: maxWidth, height: maxHeight });
	}, [flow]);

	const archerContainerRef = useRef<ArcherContainerRef>(null);
	const containerRef = useRef(null);

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (archerContainerRef.current) {
					console.log("???");
					archerContainerRef.current.refreshScreen();
				}
			}
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="viewport-container flow-background overflow-hidden"
		>
			<TransformWrapper minScale={0.1} maxScale={3} limitToBounds={false}>
				<TransformComponent>
					<ArcherContainer
						ref={archerContainerRef}
						strokeColor="black"
						strokeWidth={3}
						noCurves={true}
					>
						<div
							style={{
								width: `${dimensions.width}px`,
								height: `${dimensions.height}px`,
							}}
						>
							{flow?.screens.map((screen) => (
								<Frame
									key={screen.id}
									screen={screen}
									propeties={flow.screens_properties}
								/>
							))}
						</div>
					</ArcherContainer>
				</TransformComponent>
			</TransformWrapper>
		</div>
	);
}

export default Flow;
