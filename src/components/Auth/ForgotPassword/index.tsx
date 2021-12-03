import { FC, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Main from "./Main";
import Verify from "./Verify";
import React from "react";

const ForgotPasswordContainer = styled.div`
  ${tw``}
`;

interface IForgotPassword {}

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

const ForgotPassword: FC<IForgotPassword> = () => {
  const [isVerify, setisVerify] = useState<boolean>(false);

  const handleVerify = () => {
    setisVerify(!isVerify);
  };

  return (
    <EmailContext.Provider value={Email}>
      <ForgotPasswordContainer>
        {!isVerify && <Main handleClickVerify={handleVerify} />}
        {isVerify && <Verify handleClickVerify={handleVerify} />}
      </ForgotPasswordContainer>
    </EmailContext.Provider>
  );
};

export default ForgotPassword;
