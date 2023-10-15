import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

import { API_BASE_URL } from "@/core/constants";
import { ResponseStatusesEnum } from "@/core/enums";
import { ROUTES } from "@/core/routes";

const IS_SERVER = typeof window === "undefined";

export const $api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => config);

$api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const axiosError = error as AxiosError;

    if (axiosError.response?.status === ResponseStatusesEnum.UNAUTHORIZE) {
      localStorage.clear();

      if (IS_SERVER) {
        const { cookies } = await import("next/headers");
        cookies().delete("access_token");
        cookies().delete("refresh_token");
      }
    }

    if (axiosError.response?.status === ResponseStatusesEnum.FORBIDDEN) {
      console.log("У Вас недостаточно прав. Обратитесь к Вашему администратору.");
    }

    if (axiosError.response?.status === ResponseStatusesEnum.NOT_FOUND) {
      console.log("Неверный адрес запроса.");
    }

    if (axiosError.response?.status === ResponseStatusesEnum.UNPROCESSABLE) {
      if (IS_SERVER) {
        redirect(ROUTES.application.path);
      } else {
        window.location.replace(ROUTES.application.path);
      }
    }

    if (axiosError.response?.status === ResponseStatusesEnum.SERVER_ERROR) {
      console.log("Ошибка на сервере. Скоро починим.");
    }

    return Promise.reject(error);
  },
);
