import React, { ReactNode } from "react";
import { PageTitleWrapper } from "../components/PageTitleWrapprer";

interface BasePageProps {
    title: string;
    children: ReactNode;
}

const BasePage: React.FC<BasePageProps> = ({ title, children }) => {
    return (
        <PageTitleWrapper title={title}>
            <div className="flex-fill d-flex">{children}</div>
        </PageTitleWrapper>
    );
};

export default BasePage;
