import axios from "axios";

import { apiBaseUrl } from "@/core/constants";

export const $api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

$api.interceptors.request.use((config) => config);

$api.interceptors.response.use(
  (response) => response,
  () => {},
);
