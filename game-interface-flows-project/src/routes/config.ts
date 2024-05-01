import { ReactElement } from "react";
import MainPage from "../pages/MainPage";
import TestPage from "../pages/TestPage";

interface RouteConfig {
    path: string;
    element: ReactElement;
}

const routeConfigs: RouteConfig[] = [
	{ path: "/", element: MainPage() },
	{ path: "/test", element: TestPage() },
	{ path: "/flows/:id", element: TestPage() }
];

export default routeConfigs;
