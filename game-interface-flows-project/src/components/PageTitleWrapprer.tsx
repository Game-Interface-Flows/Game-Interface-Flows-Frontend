import React, { useEffect } from "react";

interface TitleProps {
    title: string;
    children: React.ReactNode;
}

export const PageTitleWrapper: React.FC<TitleProps> = ({ title, children }) => {
    const maintTitle = "Game Interface Flows";

    useEffect(() => {
        document.title = `${maintTitle} — ${title}`;
    }, [title]);

    return <>{children}</>;
};
