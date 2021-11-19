import StorageToken from "@common/utils/storage";
import Button from "@designs/Button";
import Input from "@designs/Input";
import { useAppDispatch } from "@hooks/redux";
import { getUserSuccess, getWishlist } from "@redux/slides/user";
import fetchAuth from "@services/auth";
import { Formik } from "formik";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import tw from "twin.macro";
import * as Yup from "yup";

const LoginContainer = styled.div`
  ${tw``}
`;
const Form = styled.form`
  ${tw`grid gap-6 py-10`}
`;
const FormControl = styled.div`
  ${tw`grid gap-4 mt-4`}
`;

interface ILogin {
  handleClickForm?: () => void;
}
interface IFormValues extends ILogin {
  email: string;
  password: string;
}

const Login: FC<ILogin> = ({ handleClickForm }) => {
  const dispatch = useAppDispatch();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <Formik
      initialValues={{
        email: "minhphatdev@gmail.com",
        password: "12345678",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Please enter your email"),
        password: Yup.string()
          .min(6, "Password is more than 6 characters")
          .max(30, "Username less than 20 characters")
          .required("Please enter your password"),
      })}
      onSubmit={async (payload: IFormValues) => {
        try {
          let result = await fetchAuth.login(payload);

          await StorageToken.setUser(result.token);

          dispatch(getWishlist());

          dispatch(getUserSuccess({ payload: result.data }));
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
              <Input
                name="email"
                title="Username"
                type="text"
                value={values.email}
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
              <FormControl>
                <Button type="submit" variant="container">
                  Sign in
                </Button>
                <Button
                  type="button"
                  onClick={() => handleClickForm && handleClickForm()}
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

export default Login;
