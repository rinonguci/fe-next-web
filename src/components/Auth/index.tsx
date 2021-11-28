import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Login from "./Login";
import Signup from "./Signup";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import useToggleAndCloseVer2 from "@hooks/useToggleAndCloseVer2";
import { setOverflowUser } from "@redux/slices/ui";

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

const Auth: FC<IAuth> = () => {
  const dispatch = useAppDispatch();
  const [isForm, setIsForm] = useState<boolean>(false);
  const { overflowUser } = useAppSelector((state) => state.uiReducers);

  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useToggleAndCloseVer2(ref);

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

  const handleForm = () => {
    setIsForm(!isForm);
  };

  const handleCloseForm = () => {
    setIsActive(false);
  };

  return (
    <AuthContainer isActive={overflowUser}>
      {overflowUser && (
        <AuthBox ref={ref}>
          <TitleBox>
            <Title>Sign In</Title>
          </TitleBox>
          <FormBox>
            {!isForm && (
              <Login
                handleCloseForm={handleCloseForm}
                handleClickForm={handleForm}
              />
            )}
            {isForm && <Signup handleClickForm={handleForm} />}
          </FormBox>
        </AuthBox>
      )}
    </AuthContainer>
  );
};

export default Auth;
