import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : false;
};

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error);

    return Promise.reject(error);
  }
);
export default client;
