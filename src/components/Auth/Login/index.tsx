import StorageToken from "@common/utils/storage";
import Button from "@designs/Button";
import Input from "@designs/Input";
import Loading from "@designs/IconLoading";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { getCart, getUserSuccess, getWishlist } from "@redux/slices/user";
import fetchAuth from "@services/auth";
import { Formik } from "formik";
import { FC, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import tw from "twin.macro";
import * as Yup from "yup";
import { AuthContext } from "..";
import IconLoading from "@designs/IconLoading";

const LoginContainer = styled.div`
  ${tw``}
`;
const Form = styled.form`
  ${tw`grid gap-3 py-10`}
`;
const FormControl = styled.div`
  ${tw`grid gap-4 mt-4`}
`;
const ForgotPassword = styled.div`
  ${tw`text-right cursor-pointer`}
`;
const ForgotText = styled.div`
  ${tw`font-semibold`}
`;

interface ILogin {}
interface IFormValues extends ILogin {
  email: string;
  password: string;
}

const Main: FC<ILogin> = () => {
  const dispatch = useAppDispatch();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { setTitle, setStateForm, handleCloseForm } = useContext(AuthContext);

  useEffect(() => {
    setTitle?.("Login");
  }, []);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Please enter your email"),
        password: Yup.string()
          .min(8, "Password is more than 8 characters")
          .max(30, "Username less than 20 characters")
          .required("Please enter your password"),
      })}
      onSubmit={async (payload: IFormValues) => {
        setLoading(true);
        let result = await fetchAuth.login(payload);

        if (typeof result === "string") {
          toast.error(result);
          setLoading(false);
          return;
        }

        StorageToken.setUser(result.token);

        dispatch(getUserSuccess({ payload: result.data }));
        dispatch(getWishlist());
        dispatch(getCart());

        handleCloseForm?.();
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
              <Input
                name="email"
                title="Username"
                type="text"
                value={values.email}
                placeholder="elonmusk@summon.com"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.email}
                touched={touched.email}
              />
              <Input
                name="password"
                title="Password"
                type={isShowPassword ? "text" : "password"}
                value={values.password}
                placeholder="12345678"
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
              <ForgotPassword>
                <ForgotText onClick={() => setStateForm?.("FORGOT_PASSWORD")}>
                  Forgot Password ?
                </ForgotText>
              </ForgotPassword>
              <FormControl>
                <Button disabled={loading} type="submit" variant="container">
                  {loading ? <IconLoading /> : "Sign in"}
                </Button>
                <Button
                  type="button"
                  onClick={() => setStateForm?.("SIGNUP")}
                  variant="outlined"
                >
                  New to Summon Shop? Create account
                </Button>
              </FormControl>
            </Form>
          </LoginContainer>
        );
      }}
    </Formik>
  );
};

export default Main;
