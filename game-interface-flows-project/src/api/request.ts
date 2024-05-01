import axios, { Method, AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs"; 

const api = axios.create({
	baseURL: "http://127.0.0.1:8000/api/",
});

interface RequestOptions<P = Record<string, unknown>, B = Record<string, unknown>> {
    params?: P;
    data?: B;
}

const request = <T, P = unknown, B = unknown>(
	method: Method,
	url: string,
	options: RequestOptions<P, B> = {}
): Promise<AxiosResponse<T>> => {
	const requestConfig: AxiosRequestConfig = {
		method,
		url,
		...options,
		paramsSerializer: params => 
			qs.stringify(params, { arrayFormat: "repeat" })
	};

	return api.request<T>(requestConfig);
};

export default request;
