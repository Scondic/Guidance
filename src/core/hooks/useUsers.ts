import { useQuery } from "@tanstack/react-query";

import { $api } from "@/core/axios";
import { UserRepository } from "@/services/users";

const userRepository = new UserRepository($api, "/api/v1/user");

export const useUsersAll = () => {
  return useQuery({
    queryKey: ["users/getAll"],
    queryFn: () => userRepository.getAllUsers(),
  });
};

export const useUserById = (userId: number) => {
  return useQuery({
    queryKey: ["users/getById", userId],
    queryFn: () => userRepository.getUserById(userId),
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["users/useCurrentUser"],
    queryFn: () => userRepository.getCurrentProfile(),
  });
};
