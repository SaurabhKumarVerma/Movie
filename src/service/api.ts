import axios, {AxiosError, AxiosInstance} from 'axios';
import {IApiService} from '../types/interface/Apiservice.interface';
import Config from 'react-native-config';

class ApiService implements IApiService {
  private api: AxiosInstance;

  constructor() {
    this.createApiInstance();
  }

  private async createApiInstance() {
    this.api = axios.create({
      baseURL: Config.API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public get<T>(url: string): Promise<T> {
    return this.api
      .get(url)
      .then(response => response.data as T)
      .catch((error: AxiosError) => {
        console.error(error);
        throw error;
      });
  }

  public post<T>(url: string, data: any): Promise<T> {
    return this.api
      .post(url, data)
      .then(response => response.data as T)
      .catch((error: AxiosError) => {
        console.error(error);
        throw error;
      });
  }

  public put<T>(url: string, data: any): Promise<T> {
    return this.api
      .put(url, data)
      .then(response => response.data as T)
      .catch((error: AxiosError) => {
        console.error(error);
        throw error;
      });
  }

  public delete<T>(url: string): Promise<T> {
    return this.api
      .delete(url)
      .then(response => response.data as T)
      .catch((error: AxiosError) => {
        console.error(error);
        throw error;
      });
  }
}
const apiService = new ApiService();
export default apiService;
