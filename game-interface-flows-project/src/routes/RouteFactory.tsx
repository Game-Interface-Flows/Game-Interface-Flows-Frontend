import React from "react";
import { Route } from "react-router-dom";
import routeConfigs from "./config";

export const createRoutes = () => {
	return routeConfigs.map((config, index) => (
		<Route key={index} path={config.path} element={config.element} />
	));
};
