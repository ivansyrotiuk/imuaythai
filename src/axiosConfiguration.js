import axios from "axios";

export const configApiHost = () => {
    if (process.env.NODE_ENV === "production") {
        axios.defaults.baseURL = "https://imuaythai-api.herokuapp.com/";
        axios.defaults.baseURL = process.env.API_HOST;
    } else if (process.env.NODE_ENV === "development") {
        axios.defaults.baseURL = "https://imuaythai-api-dev.herokuapp.com/";
        axios.defaults.baseURL = process.env.API_HOST;
    } else axios.defaults.baseURL = "http://localhost:5000/";
};

export const setAuthToken = token => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};
