export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginDataResponse {
  data: { user: IUser };
  token: string;
}
