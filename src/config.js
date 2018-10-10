const dev = {
    env: "development"
}

const prod = {
    env: "production"
}

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

console.log(config);

export default config;