const dev = {
    apiHost: "https://imuaythai-api-dev.herokuapp.com/"
}

const prod = {
    apiHost: "https://imuaythai-api.herokuapp.com/"
}

const local = {
    apiHost: "http://localhost:5000/"
}


const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : process.env.REACT_APP_STAGE === 'dev' 
    ? dev
    : local;

console.log(config);

export default config;