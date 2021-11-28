import Button from "@designs/Button";
import Input from "@designs/Input";
import fetchAuth from "@services/auth";
import { Formik } from "formik";
import React from "react";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import tw from "twin.macro";
import * as Yup from "yup";
import Main from "./Main";
import Verify from "./Verify";

const LoginContainer = styled.div`
  ${tw``}
`;
const Form = styled.form`
  ${tw`grid gap-6 py-10`}
`;
const FormControl = styled.div`
  ${tw`grid gap-4 mt-4`}
`;
const Text = styled.span`
  ${tw`text-center`}
`;

const SignupContainer = styled.div`
  ${tw``}
`;
interface ISignup {
  handleClickForm?: () => void;
}

const Email = (() => {
  let email: string = "";
  const getEmail = () => {
    return email;
  };
  const setEmail = (newEmail: string) => {
    email = newEmail;
  };

  return {
    getEmail: getEmail,
    setEmail: setEmail,
  };
})();

export const EmailContext = React.createContext(Email);

const Signup: FC<ISignup> = ({ handleClickForm }) => {
  const [isVerify, setisVerify] = useState<boolean>(false);

  const handleVerify = () => {
    setisVerify(!isVerify);
  };

  return (
    <EmailContext.Provider value={Email}>
      {!isVerify && (
        <Main
          handleClickForm={handleClickForm}
          handleClickVerify={handleVerify}
        />
      )}
      {isVerify && <Verify handleClickVerify={handleVerify} />}
    </EmailContext.Provider>
  );
};

export default Signup;
