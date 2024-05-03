import { ReactElement } from "react";
import MainPage from "../pages/MainPage";
import TestPage from "../pages/TestPage";
import FlowPage from "../pages/FlowPage";
import React from "react";

interface RouteConfig {
	path: string;
	element: ReactElement;
}

const routeConfigs: RouteConfig[] = [
	{ path: "/", element: MainPage() },
	{ path: "/test", element: TestPage() },
	{ path: "/flows/:flowId", element: React.createElement(FlowPage) },
];

export default routeConfigs;
