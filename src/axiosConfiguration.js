import axios from "axios";
import config from "./config";
export const configApiHost = () => {
    axios.defaults.baseURL = config.apiHost;
};

export const setAuthToken = token => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};
