import axios from "axios";
import config from './config';
console.log(config);
console.log(process.env);
export const configApiHost = () => {
    if (process.env.NODE_ENV == "production") {
        axios.defaults.baseURL = "https://imuaythai-api.herokuapp.com/";
    } else if (process.env.NODE_ENV == "development") {
        axios.defaults.baseURL = "https://imuaythai-api-dev.herokuapp.com/";
    } else axios.defaults.baseURL = "http://localhost:5000/";
};

export const setAuthToken = token => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};
