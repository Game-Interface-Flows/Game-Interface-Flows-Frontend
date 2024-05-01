import { IFlow } from "../models/flow";
import React, { useState, useEffect, useRef } from "react";
import request from "../api/request";
import "../App.css";

interface FlowProps {
    flow: IFlow
}

export function Flow({flow}: FlowProps) {
	const [flowData, setFlowData] = useState<IFlow | null>(null);

	useEffect(() => {
		request<IFlow>("get", "/api/flow/24/")
			.then(response => {
				setFlowData(response.data);
			})
			.catch(error => {
				console.error("Error fetching board data:", error);
			});
	}, []);

	const boardRef = useRef<HTMLDivElement>(null);
	const [boardSize, setBoardSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		let maxWidth = 0, maxHeight = 0;
		flowData?.frames.forEach(image => {
			const rightEdge = image.position_x + 1000;
			const bottomEdge = image.position_y + 1000;
			if (rightEdge > maxWidth) maxWidth = rightEdge;
			if (bottomEdge > maxHeight) maxHeight = bottomEdge;
		});
		setBoardSize({ width: maxWidth, height: maxHeight });
	}, [flowData?.frames]);


	return (
		<div className="board-container">
			<div className="main-board" ref={boardRef} style={{
				position: "relative",
				width: `${boardSize.width}px`,
				height: `${boardSize.height}px`,
			}}>
				{flowData?.frames.map(frame => (
					<img
						key={frame.id}
						src={frame.frame}
						alt={`Image ${frame.id}`}
						style={{ position: "absolute", left: frame.position_x * 580, top: frame.position_y + 100 , width: 570, height: 360}}
					/>
				))}
			</div>
			<div className="right-panel">
				<h2>{flow.title}</h2>
			</div>
		</div>
	);
}