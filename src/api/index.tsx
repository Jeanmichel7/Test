import axios from "axios";
// import { ApiErrorResponse } from "../types";

const api = axios.create({
  baseURL: "https://hds-staging.toktokdoc.com/physicians",
  withCredentials: false,
});

export default api;
