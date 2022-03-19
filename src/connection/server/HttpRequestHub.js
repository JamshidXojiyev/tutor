import { axiosInstance } from "./host";

export const HttpRequestHub = (config = null) => {
    return axiosInstance(config);
};