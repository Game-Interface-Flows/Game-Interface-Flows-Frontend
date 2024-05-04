import { ReactElement } from "react";
import MainPage from "../pages/MainPage";
import TestPage from "../pages/TestPage";
import FlowPage from "../pages/FlowPage";
import React from "react";

interface RouteConfig {
	path: string;
	title: string;
	element: ReactElement;
}

const routeConfigs: RouteConfig[] = [
	{ path: "/", title: "Home", element: MainPage() },
	{ path: "/test", title: "Test", element: TestPage() },
	{
		path: "/flows/:flowId",
		title: "Flow",
		element: React.createElement(FlowPage),
	},
];

export default routeConfigs;
