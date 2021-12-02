import { FC, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Main from "./Main";
import Verify from "./Verify";

const ForgotPasswordContainer = styled.div`
  ${tw``}
`;

interface IForgotPassword {}

const ForgotPassword: FC<IForgotPassword> = () => {
  const [isVerify, setisVerify] = useState<boolean>(false);

  const handleVerify = () => {
    setisVerify(!isVerify);
  };

  return (
    <ForgotPasswordContainer>
      {!isVerify && <Main handleClickVerify={handleVerify} />}
      {isVerify && <Verify handleClickVerify={handleVerify} />}
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
