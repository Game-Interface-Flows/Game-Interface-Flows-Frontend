import { ReactElement } from "react";
import MainPage from "../pages/MainPage";
import FlowPage from "../pages/FlowPage";
import React from "react";
import NotFoundPage from "../pages/NotFoundPage";

interface RouteConfig {
    path: string;
    title: string;
    element: ReactElement;
}

const routeConfigs: RouteConfig[] = [
    { path: "/", title: "Home", element: MainPage() },
    {
        path: "/flows/:flowId",
        title: "Flow",
        element: React.createElement(FlowPage),
    },
    {
        path: "*",
        title: "Not Found",
        element: NotFoundPage(),
    },
];

export default routeConfigs;
