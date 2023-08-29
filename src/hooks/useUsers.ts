import { useQuery } from "@tanstack/react-query";

import { getUsers } from "@/services/users";

export const useUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: () => getUsers() });
};
