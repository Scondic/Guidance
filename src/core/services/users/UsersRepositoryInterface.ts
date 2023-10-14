import { User } from "@/core/services/users";

export interface UsersRepositoryInterface {
  getAllUsers: () => Promise<User[]>;
  getUserById: (userId: number) => Promise<User>;
  getCurrentProfile: () => Promise<User>;
}
