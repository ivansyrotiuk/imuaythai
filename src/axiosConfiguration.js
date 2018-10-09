import axios from "axios";

export const configApiHost = () => {
  console.log(process.env);
  axios.defaults.baseURL = process.env.imuaythai_api || "http://localhost:5000/";
};

export const setAuthToken = token => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};
