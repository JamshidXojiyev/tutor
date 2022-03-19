import { HttpRequestHub } from "../HttpRequestHub";

export const GetPaginationFunc = (url, page = 1, size = 10) => {
  const config = {
    method: "GET",
    url: `${url}?page=${page - 1}&size=${size}`,
  };
  return HttpRequestHub(config);
};

export const GetFunc = (url) => {
  const config = {
    method: "GET",
    url: `${url}`,
  };
  return HttpRequestHub(config);
};

export const GetFuncByData = (url, data) => {
  const config = {
    method: "GET",
    url: `${url}`,
    data,
  };
  return HttpRequestHub(config);
};

export const GetDistricts = (data) => {
  const config = {
    method: "GET",
    url: `adverts/district`,
    data,
  };
  return HttpRequestHub(config);
};

export const DeleteFunc = (url) => {
  const config = {
    method: "DELETE",
    url: `${url}`,
  };
  return HttpRequestHub(config);
};

export const CreateFunc = (url, data) => {
  const config = {
    method: "POST",
    url: `${url}`,
    data,
  };
  return HttpRequestHub(config);
};

export const EditFunc = (url, data, method = "PUT") => {
  const config = {
    method: method,
    url: `${url}`,
    data,
  };
  return HttpRequestHub(config);
};
