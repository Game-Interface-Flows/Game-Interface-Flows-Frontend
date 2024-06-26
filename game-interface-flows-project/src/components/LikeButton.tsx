import React from "react";
import { observer } from "mobx-react-lite";
import { IFlowPreview } from "../models/flow_preview";
import { useStore } from "../stores/storeContext";

interface FlowProps {
    flow: IFlowPreview;
}

export const LikeButton: React.FC<FlowProps> = observer(({ flow }) => {
    const { flowsStore, authStore } = useStore();

    const handleButtonClick = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();

        const likeData = await flowsStore.likeFlow(flow.id, !flow.is_liked);
        flow.total_likes = likeData.total_likes;
        flow.is_liked = !flow.is_liked;
    };

    return (
        <div>
            <button
                className={`btn w-100 ${flow.is_liked ? "btn-primary" : "btn-outline-primary"} text-uppercase`}
                onClick={handleButtonClick}
                disabled={!authStore.token}
            >
                Likes: {flow.total_likes}
            </button>
        </div>
    );
});
