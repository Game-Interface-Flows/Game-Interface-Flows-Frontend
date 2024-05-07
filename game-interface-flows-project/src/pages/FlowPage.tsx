import React, { useEffect } from "react";
import Flow from "../components/Flow";
import { useStore } from "../stores/storeContext";
import { useParams } from "react-router-dom";
import { FlowDetails } from "../components/FlowDetails";
import { observer } from "mobx-react-lite";

const FlowPage: React.FC = observer(() => {
	const { flowsStore } = useStore();
	const { flowId } = useParams<{ flowId: string }>();

	useEffect(() => {
		if (flowId) {
			flowsStore.loadCurrentFlowById(parseInt(flowId, 10));
		}
	}, [flowId, flowsStore]);

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-9 d-flex p-0">
						<Flow flow={flowsStore.currentFlow} />
					</div>
					<div className="col-sm-0 col-md-3 d-flex p-0">
						<FlowDetails flow={flowsStore.currentFlow} />
					</div>
				</div>
			</div>
		</>
	);
});

export default FlowPage;
