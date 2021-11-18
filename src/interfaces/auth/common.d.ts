export interface IUser {
  email?: string;
  fname?: string;
  lname?: string;
  phoneNumber?: string;
}


export interface IAddUserSuccessPayload {
  user: IUser;
}


