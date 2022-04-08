import axios from "axios";
import { toast } from "react-toastify";
import { deleteCookie, getCookie, setCookie } from "../functions/useCookies";
import {
  deleteLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "../functions/useLocalStorage";
import { RefreshTokenConfig } from "./config/CrudUrls";

export const token = getLocalStorage("token");

// export let host = process.env.REACT_APP_BASE_URL;
export let host = "https://academy-back.herokuapp.com/";

export let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json; charset=utf-8",
  Authorization: token ? `Bearer ${token}` : "",
};

export let axiosInstance = axios.create({
  baseURL: `${host}/`,
  headers,
  timeout: 100000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    if (error.response) {
      if (error.response.status === 401) {
        RefreshTokenConfig(getLocalStorage("refresh_token"))
          .then((res) => {
            setLocalStorage("token", res.data.token);
            setLocalStorage("refresh_token", res.data.refreshToken);
          })
          .catch((err) => {
            deleteLocalStorage("token");
            deleteLocalStorage("refresh_token");
            deleteLocalStorage("role");
            deleteLocalStorage("userId");
            window.location.href = "/sigin";
          });
        console.log(error);
      } else {
        error.response.data.message
          ? toast.error(error.response.data.message, { autoClose: 2000 })
          : error.response.data
          ? toast.error(error.response.data)
          : toast.error("Noma'lum xatolik yuz berdi");
      }
    }
    throw error;
  }
);
// config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 100000, adapter: ƒ, …}
// data:
// email: "loginqwer@gmail.com"
// refreshToken: "589a75e0-285a-409b-87e2-e6047198e1f8"
// refresh_token_expire: 604800800
// roles: ['ROLE_TUTOR']
// token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb2dpbnF3ZXJAZ21haWwuY29tIiwiaWF0IjoxNjQ3OTQ5MTk0LCJleHAiOjE2NDgxMjE5OTR9.6Wb4DdQpINgR0fCLoNGIxyjU0olebQeJWwQYtWMIMNg"
// token_expire: 172800000
// type: "Bearer"
// userId: 1
// username: "loginqwer"
// [[Prototype]]: Object
// headers: {cache-control: 'no-cache, no-store, max-age=0, must-revalidate', content-type: 'application/json', expires: '0', pragma: 'no-cache'}
// request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 100000, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status: 200
// statusText: ""
