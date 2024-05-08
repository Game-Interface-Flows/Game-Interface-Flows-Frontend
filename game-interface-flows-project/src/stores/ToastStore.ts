import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";
import { BaseStore } from "./BaseStore";

export class ToastStore extends BaseStore {
    itemName = "cookieConsent";
    showToast = true;

    constructor(rootStore: RootStore) {
        super(rootStore);
        makeObservable(this, {
            showToast: observable,
            checkSessionStorage: action,
            acceptCookies: action,
        });
        this.checkSessionStorage();
    }

    checkSessionStorage = () => {
        const hasConsented = sessionStorage.getItem(this.itemName);
        if (hasConsented) {
            this.showToast = false;
        }
    };

    acceptCookies = () => {
        sessionStorage.setItem(this.itemName, "true");
        this.showToast = false;
    };
}
