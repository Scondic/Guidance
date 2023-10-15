import { parseCookies } from "nookies";

import { SelectOption } from "@/components/ui/SelectField/SelectField";

const cookies = parseCookies();

export const accessToken = cookies["access_token"];
export const refreshToken = cookies["refresh_token"];

export const filterOptions = (options: SelectOption[], selectedValues?: string[]) => {
  if (!selectedValues) {
    return [];
  }

  return options.filter((option) => selectedValues.includes(option.value));
};
