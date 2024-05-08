import axios, { Method, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import qs from "qs";

const getToken = () => {
    return Cookies.get("token");
};

const apiUrl = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: `http://${apiUrl}/api/`,
});

console.log(`http://${apiUrl}/api/`);

interface RequestOptions<
    P = Record<string, unknown>,
    B = Record<string, unknown>,
> {
    params?: P;
    data?: B;
}

const request = <T, P = unknown, B = unknown>(
    method: Method,
    url: string,
    options: RequestOptions<P, B> = {}
): Promise<AxiosResponse<T>> => {
    const token = getToken();
    const requestConfig: AxiosRequestConfig = {
        method,
        url,
        ...options,
        headers: {
            Authorization: token ? `Token ${token}` : undefined,
        },
        paramsSerializer: (params) =>
            qs.stringify(params, { arrayFormat: "repeat" }),
    };

    return api.request<T>(requestConfig);
};

export default request;
