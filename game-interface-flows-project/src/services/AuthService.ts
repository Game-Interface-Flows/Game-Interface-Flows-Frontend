import request from "../api/request";
import { IToken } from "../models/token";

class AuthService {
	async login(username: string, password: string): Promise<string> {
		try {
			const response = await request<IToken, unknown, { username: string; password: string }>(
				"POST", 
				"auth/token/", 
				{ data: { username, password } }
			);
			return response.data.token;
		} catch (error) {
			throw new Error("Failed to login");
		}
	}
}

export default new AuthService();
