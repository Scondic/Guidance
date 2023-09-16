import { AxiosInstance } from "axios";

import { User, UserService, UsersRepositoryInterface } from "@/services/users";

export class UserRepository implements UsersRepositoryInterface {
  private userService: UserService;

  constructor(axiosInstance: AxiosInstance, baseUrl: string) {
    this.userService = new UserService(axiosInstance, baseUrl);
  }

  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userService.getAll();
    } catch (error) {
      throw new Error(`Произошла ошибка: ${error}`);
    }
  }

  async getUserById(userId: number): Promise<User> {
    try {
      return await this.userService.getById(userId);
    } catch (error) {
      throw new Error(`Произошла ошибка: ${error}`);
    }
  }
}
