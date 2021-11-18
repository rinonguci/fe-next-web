export interface ISignupPayload {
  fname: string;
  lname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
}

export interface ISignupStatusResponse {
  status: string;
  message: string;
}
