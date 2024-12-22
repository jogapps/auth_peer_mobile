import axios from "axios";
import { getStorage } from "./helpers";
import { BASE_URL } from "./utils";

let headers = {};

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers,
    validateStatus: (status) => {
        return true;
    }
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const userToken = (await getStorage("token"));
        if (userToken) {
            let token = userToken;
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;