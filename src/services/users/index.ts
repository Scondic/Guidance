import { AxiosError } from "axios";

import { $api } from "@/core/axios";
import { User } from "@/services/users/types";

export const getUsers = async (): Promise<User[]> => {
  try {
    const { data } = await $api.get("/users");

    return data;
  } catch (exception) {
    if (exception instanceof AxiosError) {
      throw new Error(exception.message);
    } else {
      throw new Error("Ошибка выполнения запроса");
    }
  }
};
