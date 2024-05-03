import React, { useEffect, useState } from "react";
import Flow from "../components/Flow";
import { useStore } from "../stores/storeContext";
import { useParams } from "react-router-dom";
import { FlowDetails } from "../components/FlowDetails";
import { observer } from "mobx-react-lite";

const FlowPage: React.FC = observer(() => {
	const [showFlowIngo, setShowFlowInfo] = useState(true);
	const { flowsStore } = useStore();
	const { flowId } = useParams<{ flowId: string }>();

	useEffect(() => {
		if (flowId) {
			flowsStore.loadCurrentFlowById(parseInt(flowId, 10));
		}
	}, [flowId, flowsStore]);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className={`col-md-${showFlowIngo ? "9" : "12"} d-flex p-0`}>
					<Flow flow={flowsStore.currentFlow} />
					<button
						className="btn-custom btn-custom-primary"
						onClick={() => setShowFlowInfo(!showFlowIngo)}
					>
						{showFlowIngo ? ">" : "<"}
					</button>
				</div>
				{showFlowIngo && (
					<div className="col-md-3 d-flex">
						<FlowDetails flow={flowsStore.currentFlow} />
					</div>
				)}
			</div>
		</div>
	);
});

export default FlowPage;
