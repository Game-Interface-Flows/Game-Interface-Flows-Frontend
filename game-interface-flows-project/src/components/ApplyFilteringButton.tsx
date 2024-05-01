import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";

export const ApplyFilteringBytton: React.FC = observer(() => {
	const { flowsStore } = useStore();

	return (
		<button 
			className="btn btn-primary mt-3" 
			onClick={() => flowsStore.loadFlows()}
		>
            Apply
		</button>
	);
});
