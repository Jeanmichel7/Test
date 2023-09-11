import axios from "axios";

const api = axios.create({
  baseURL: "https://hds-staging.toktokdoc.com/physicians",
  withCredentials: false,
});

export default api;
