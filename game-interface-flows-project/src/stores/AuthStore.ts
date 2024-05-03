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

export class AuthStore extends BaseStore {
	token: string | null = null;
	error = "";

	constructor(rootStore: RootStore) {
		super(rootStore);
		makeObservable(this, {
			token: observable,
			error: observable,
			isAuthenticated: computed,
			logoutUser: action,
			loginUser: action,
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

	async loginUser(username: string, password: string) {
		let fetchedToken: string | null = null;

		try {
			fetchedToken = await AuthService.login(username, password);
			Cookies.set("token", fetchedToken, { expires: 7 });
			this.error = "";
		} catch (error) {
			fetchedToken = null;
		}

		runInAction(() => {
			this.token = fetchedToken;
		});
	}

	clearError() {
		this.error = "";
	}

	logoutUser() {
		this.token = null;
		Cookies.remove("token");
	}
}
