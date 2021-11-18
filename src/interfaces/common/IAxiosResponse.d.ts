export interface IAxiosResponse<T> {
  status: string | number;
  data: T;
}
