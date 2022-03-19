import axios from "axios";
import { toast } from "react-toastify";
import { API_URL, SITE_LANG, TOKEN } from "../constants";
import { deleteCookie, getCookie } from "../functions/useCookies";

export const token = getCookie(TOKEN);
export const userData = JSON.parse(localStorage.getItem("user"));

export let host = API_URL;

export let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json; charset=utf-8",
  Authorization: token ? `Bearer ${token}` : "",
  Language: localStorage.getItem(SITE_LANG),
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
        deleteCookie(TOKEN);
        toast.error("Iltimos avval tizimga kiring");
        window.location.href = "/signin";
      } else {
        error.response.data && toast.error(error.response.data.message);
      }
    }
    throw error;
  }
);
