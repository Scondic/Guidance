import { AxiosInstance, AxiosResponse } from "axios";

export abstract class ApiBase<T> {
  protected readonly baseUrl: string;
  protected readonly axiosInstance: AxiosInstance;

  protected constructor(axiosInstance: AxiosInstance, baseUrl: string) {
    this.axiosInstance = axiosInstance;
    this.baseUrl = baseUrl;
  }

  async getAll(): Promise<T[]> {
    const { data }: AxiosResponse<T[]> = await this.axiosInstance.get(
      this.baseUrl,
    );
    return data;
  }

  async getById(id: number): Promise<T> {
    const { data }: AxiosResponse<T> = await this.axiosInstance.get(
      `${this.baseUrl}/${id}`,
    );
    return data;
  }

  async create(entity: T): Promise<T> {
    const { data }: AxiosResponse<T> = await this.axiosInstance.post(
      this.baseUrl,
      entity,
    );
    return data;
  }

  async update(entity: T): Promise<T> {
    const { data }: AxiosResponse<T> = await this.axiosInstance.put(
      `${this.baseUrl}/${(entity as any).id}`,
      entity,
    );
    return data;
  }

  async delete(id: number): Promise<void> {
    await this.axiosInstance.delete(`${this.baseUrl}/${id}`);
  }
}
