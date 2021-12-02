import { FC, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Login from "./Login";
import Signup from "./Signup";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import useToggleAndCloseVer2 from "@hooks/useToggleAndCloseVer2";
import { setOverflowUser } from "@redux/slices/ui";
import React from "react";
import ForgotPassword from "./ForgotPassword";

const AuthContainer = styled.div<{ isActive: boolean }>`
  ${tw`fixed z-[1000] w-full min-h-[100vh] flex items-center justify-center`}
  background-color: #33333333;

  ${({ isActive }) => (isActive ? tw`flex` : tw`hidden`)}
`;

const AuthBox = styled.div`
  ${tw`w-full max-width[440px] bg-white rounded shadow-xl py-6 px-12 sm:mt-20 lg:mt-10 mb-20`}
`;

const TitleBox = styled.div`
  ${tw`text-center pb-3 border-b border-gray-300`}
`;
const Title = styled.span`
  ${tw`text-3xl font-semibold`}
`;

const FormBox = styled.div`
  ${tw``}
`;

const Form = styled.form`
  ${tw`grid gap-6 py-10`}
`;

interface IAuth {}

type IStateForm = "LOGIN" | "FORGOT_PASSWORD" | "SIGNUP";
interface IAuthContext {
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
  setStateForm?: React.Dispatch<React.SetStateAction<IStateForm>>;
  handleCloseForm?: () => void;
}
export const AuthContext = React.createContext<IAuthContext>({});

const Auth: FC<IAuth> = () => {
  const dispatch = useAppDispatch();
  const { overflowUser } = useAppSelector((state) => state.uiReducers);

  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useToggleAndCloseVer2(ref);

  const [title, setTitle] = useState("");
  const [stateForm, setStateForm] = useState<IStateForm>("LOGIN");

  useEffect(() => {
    setStateForm("LOGIN");
  }, [overflowUser]);

  useEffect(() => {
    if (isActive === false) {
      dispatch(setOverflowUser(false));
    }
  }, [isActive]);

  useEffect(() => {
    if (overflowUser === true) {
      setIsActive(true);
    }
  }, [overflowUser]);

  const handleCloseForm = () => {
    setIsActive(false);
  };

  const handleForm = (action: IStateForm) => {
    switch (action) {
      case "LOGIN":
        return <Login />;
      case "SIGNUP":
        return <Signup />;
      case "FORGOT_PASSWORD":
        return <ForgotPassword />;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setTitle,
        setStateForm,
        handleCloseForm,
      }}
    >
      <AuthContainer isActive={overflowUser}>
        {overflowUser && (
          <AuthBox ref={ref}>
            <TitleBox>
              <Title>{title}</Title>
            </TitleBox>
            <FormBox>{handleForm(stateForm)}</FormBox>
          </AuthBox>
        )}
      </AuthContainer>
    </AuthContext.Provider>
  );
};

export default Auth;
