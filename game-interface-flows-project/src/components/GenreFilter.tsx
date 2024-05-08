import React from "react";
import { useStore } from "../stores/storeContext";
import { GenericFilter } from "./GenericFilter";

export const GenreFilter: React.FC = () => {
    const { genresStore } = useStore();

    return <GenericFilter store={genresStore} />;
};
