import axios from "axios";

import { API_BASE_URL } from "@/core/constants";

export const $api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => config);

$api.interceptors.response.use(
  (response) => response,
  () => {},
);
