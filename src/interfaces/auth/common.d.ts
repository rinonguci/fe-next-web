export interface IUser {
  email?: string;
  fname?: string;
  lname?: string;
  phoneNumber?: string;
}

export interface IGetUserSuccessPayload {
  user: IUser;
}
