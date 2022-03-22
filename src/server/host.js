import axios from "axios";
import { toast } from "react-toastify";
import { deleteCookie, getCookie } from "../functions/useCookies";

export const token = getCookie("token");

export let host = process.env.REACT_APP_BASE_URL;

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
        // deleteCookie(TOKEN);
        // toast.error("Iltimos avval tizimga kiring");
        // window.location.href = "/signin";
        console.log(error);
      } else {
        error.response.data && toast.error(error.response.data.message);
      }
    }
    throw error;
  }
);
