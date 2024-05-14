import { ReactElement } from "react";
import MainPage from "../pages/MainPage";
import FlowPage from "../pages/FlowPage";
import React from "react";
import NotFoundPage from "../pages/NotFoundPage";
import PersonalPage from "../pages/PersonalPage";

interface RouteConfig {
    path: string;
    title: string;
    element: ReactElement;
}

const routeConfigs: RouteConfig[] = [
    { path: "/", title: "Home", element: React.createElement(MainPage) },
    { path: "/home", title: "Home", element: React.createElement(MainPage) },
    { path: "/flows", title: "Home", element: React.createElement(MainPage) },
    {
        path: "/personal",
        title: "Personal",
        element: React.createElement(PersonalPage),
    },
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
