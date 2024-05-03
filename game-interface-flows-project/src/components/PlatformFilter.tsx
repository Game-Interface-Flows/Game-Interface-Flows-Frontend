import React from "react";
import { useStore } from "../stores/storeContext";
import { GenericFilter } from "./GenericFilter";

export const PlatformFilter: React.FC = () => {
	const { platformsStore } = useStore();

	return <GenericFilter store={platformsStore} />;
};