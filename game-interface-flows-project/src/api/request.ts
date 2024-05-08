import axios, { Method, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import qs from "qs";

const getToken = () => {
    return Cookies.get("token");
};

const apiUrl = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: `${apiUrl}/api/`,
});

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
    options: RequestOptions<P, B> = {},
    content_type = "application/json"
): Promise<AxiosResponse<T>> => {
    const token = getToken();
    const requestConfig: AxiosRequestConfig = {
        method,
        url,
        ...options,
        headers: {
            "Content-Type": content_type,
            Authorization: token ? `Token ${token}` : undefined,
        },
        paramsSerializer: (params) =>
            qs.stringify(params, { arrayFormat: "repeat" }),
    };

    return api.request<T>(requestConfig);
};

export default request;
