import StorageToken from "@common/utils/storage";
import { AuthContext } from "@components/Auth";
import Button from "@designs/Button";
import Input from "@designs/Input";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { getCart, getUserSuccess, getWishlist } from "@redux/slices/user";
import fetchAuth from "@services/auth";
import { Formik } from "formik";
import { FC, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import tw from "twin.macro";
import * as Yup from "yup";
import { EmailContext } from "..";

const LoginContainer = styled.div`
  ${tw``}
`;
const Form = styled.form`
  ${tw`grid gap-3 py-10`}
`;
const FormControl = styled.div`
  ${tw`grid gap-4 mt-4`}
`;
const Notify = styled.p`
  ${tw`text-center font-semibold`}
`;
const ForgotPassword = styled.div`
  ${tw`text-right`}
`;
const ForgotText = styled.div`
  ${tw`font-semibold`}
`;

interface ILogin {
  handleClickVerify: () => void;
}
interface IFormValues {
  code: string;
  password: string;
  passwordConfirm: string;
}

const Veriry: FC<ILogin> = ({ handleClickVerify }) => {
  const dispatch = useAppDispatch();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const { setTitle, setStateForm } = useContext(AuthContext);
  const { getEmail } = useContext(EmailContext);
  useEffect(() => {
    setTitle?.("Forgot Password");
  }, []);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <Formik
      initialValues={{
        code: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={Yup.object().shape({})}
      onSubmit={async (payload: IFormValues) => {
        try {
          let result = await fetchAuth.resetPassword({
            ...payload,
            email: getEmail(),
          });

          if (typeof result === "string") {
            toast.error(result);
            return;
          }

          setStateForm?.("LOGIN");
        } catch (error: any) {
          toast.error(error);
        }
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <LoginContainer>
            <Form onSubmit={handleSubmit}>
              <Notify>
                Enter the email address used for your Childrensalon account and
                click {"'Send'"}. We will then email you with a link that you
                can click to create a new password.
              </Notify>
              <Input
                name="code"
                title="Code"
                type="text"
                placeholder="Please enter the code in your email"
                value={values.code}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.code}
                touched={touched.code}
              />
              <Input
                name="password"
                title="Password"
                type={isShowPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.password}
                touched={touched.password}
                iconLeft={
                  <i
                    onClick={handleShowPassword}
                    className="text-base ri-eye-line"
                  />
                }
              />
              <Input
                name="passwordConfirm"
                title="Confirm Password"
                type={isShowPassword ? "text" : "password"}
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.passwordConfirm}
                touched={touched.passwordConfirm}
                iconLeft={
                  <i
                    onClick={handleShowPassword}
                    className="text-base ri-eye-line"
                  />
                }
              />
              <FormControl>
                <Button type="submit" variant="container">
                  Confirm
                </Button>
                <Button
                  type="button"
                  onClick={() => handleClickVerify()}
                  variant="outlined"
                >
                  Return
                </Button>
              </FormControl>
            </Form>
          </LoginContainer>
        );
      }}
    </Formik>
  );
};

export default Veriry;
