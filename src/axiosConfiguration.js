import axios from "axios";

export const configApiHost = () => {
    if (process.env.REACT_APP_HOST_ENV === "production") {
        axios.defaults.baseURL = "https://imuaythai-api.herokuapp.com/";
    } else if (process.env.REACT_APP_HOST_ENV === "development") {
        axios.defaults.baseURL = "https://imuaythai-api-dev.herokuapp.com/";
    } else axios.defaults.baseURL = "http://localhost:5000/";
};

export const setAuthToken = token => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};
