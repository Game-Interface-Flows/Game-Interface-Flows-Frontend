import AuthService from "../services/AuthService";
import { RootStore } from "./RootStore";
import { BaseStore } from "./BaseStore";
import { computed, makeObservable, observable } from "mobx";
import Cookies from "js-cookie";

export class AuthStore extends BaseStore {
	token: string | null = null;
	error = "";

	constructor(rootStore: RootStore) {
		super(rootStore);
		makeObservable(this, {
			token: observable,
			error: observable,
			isAuthenticated: computed
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
		try {
			const token = await AuthService.login(username, password);
			this.token = token;
			Cookies.set("token", token, { expires: 7 });
			this.error = "";
		} catch (error) {
			this.token = null;
		}
	}

	clearError() {
		this.error = "";
	}

	logoutUser() {
		this.token = null;
		Cookies.remove("token");
	}
}
