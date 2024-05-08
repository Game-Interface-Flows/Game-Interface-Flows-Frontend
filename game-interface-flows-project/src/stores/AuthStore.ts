import AuthService from "../services/AuthService";
import { RootStore } from "./RootStore";
import { BaseStore } from "./BaseStore";
import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction,
} from "mobx";
import Cookies from "js-cookie";
import { IToken } from "../models/token";
import axios from "axios";

export class AuthStore extends BaseStore {
    token: string | null = null;
    error: string | null = null;

    constructor(rootStore: RootStore) {
        super(rootStore);
        makeObservable(this, {
            token: observable,
            error: observable,
            isAuthenticated: computed,
            logoutUser: action,
            loginUser: action,
            clearError: action,
        });
        this.checkAuth();
    }

    get isAuthenticated(): boolean {
        return this.token !== null;
    }

    checkAuth() {
        const token = Cookies.get("token");
        if (token) {
            this.token = token;
        }
    }

    loginUser = async (username: string, password: string) => {
        let fetchedToken: IToken;

        try {
            fetchedToken = await AuthService.login(username, password);
            Cookies.set("token", fetchedToken.token, { expires: 7 });
            this.error = null;
            runInAction(() => {
                this.token = fetchedToken.token;
            });
        } catch (error: unknown) {
            runInAction(() => {
                if (axios.isAxiosError(error)) {
                    this.error = error.response?.data.details;
                }
            });
        }
    };

    clearError() {
        this.error = "";
    }

    logoutUser() {
        this.token = null;
        Cookies.remove("token");
    }
}
