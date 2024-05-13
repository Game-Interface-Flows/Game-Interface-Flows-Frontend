import React from "react";
import { Route } from "react-router-dom";
import routeConfigs from "./config";
import { PageTitleWrapper } from "../components/PageTitleWrapprer";

export const createRoutes = () => {
    return routeConfigs.map((config, index) => (
        <Route
            key={index}
            path={config.path}
            element={
                <PageTitleWrapper title={config.title}>
                    <div className="flex-fill d-flex px-2">
                        {config.element}
                    </div>
                </PageTitleWrapper>
            }
        />
    ));
};
