import React, { useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { IFlow } from "../models/flow";
import { ArcherContainer } from "react-archer";
import { Screen } from "./Screen";

interface FlowContentProps {
    flow: IFlow;
}

export function Flow({ flow }: FlowContentProps) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const maxWidth =
            (flow.max_x + 1) *
            (flow.screens_properties.width + flow.screens_properties.offset_x);
        const maxHeight =
            (flow.max_y + 1) *
            (flow.screens_properties.height + flow.screens_properties.offset_y);

        setDimensions({ width: maxWidth, height: maxHeight });
    }, [flow]);

    return (
        <div className="viewport-container flow-background overflow-hidden">
            <TransformWrapper
                minScale={0.1}
                maxScale={3}
                initialScale={1}
                limitToBounds={false}
            >
                <TransformComponent>
                    <ArcherContainer
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
                                <Screen
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
