import axios from "axios";
import { getStorage } from "./helpers";
import { BASE_URL } from "./utils";

const axiosUploadInstance = axios.create({
    baseURL: BASE_URL,
    validateStatus: (status) => {
        return true;
    }
});

axiosUploadInstance.interceptors.request.use(
    async (config) => {
        const userToken = (await getStorage("token"));
        if (userToken) {
            let token = userToken;
            config.headers.Authorization = `${token}`;
            //config.headers.common['Content-Type'] = 'multipart/form-data'
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosUploadInstance;