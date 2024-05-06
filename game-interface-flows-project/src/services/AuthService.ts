import request from "../api/request";

import { IToken } from "../models/token";

class AuthService {
	async login(username: string, password: string): Promise<IToken> {
		const response = await request<
			IToken,
			unknown,
			{ username: string; password: string }
		>("POST", "auth/token/", { data: { username, password } });
		return response.data;
	}
}

export default new AuthService();
