import { GenreStore } from "./GenreStore";
import { FlowStore } from "./FlowStore";
import { AuthStore } from "./AuthStore";
import { PlatformStore } from "./PlatformStore";
import { SortingStore } from "./SortingStore";
import { ToastStore } from "./ToastStore";

export const storeConfig = {
    genresStore: GenreStore,
    platformsStore: PlatformStore,
    sortingStore: SortingStore,
    flowsStore: FlowStore,
    authStore: AuthStore,
    toastStore: ToastStore,
};
