import React, { useEffect } from "react";

interface TitleProps {
    title: string;
    children: React.ReactNode;
}

export const PageTitleWrapper: React.FC<TitleProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = `${document.title} — ${title}`;
    }, [title]);

    return <>{children}</>;
};
