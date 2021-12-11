import { AuthContext } from "@components/Auth";
import Button from "@designs/Button";
import IconLoading from "@designs/IconLoading";
import Input from "@designs/Input";
import fetchAuth from "@services/auth";
import { Formik } from "formik";
import { FC, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import tw from "twin.macro";
import * as Yup from "yup";
import { EmailContext } from "../index";

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

interface IMain {
  handleClickVerify?: () => void;
}
interface IFormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
}

const Main: FC<IMain> = ({ handleClickVerify }) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const { setEmail } = useContext(EmailContext);
  const [loading, setLoading] = useState<boolean>(false);

  const { setTitle, setStateForm } = useContext(AuthContext);

  useEffect(() => {
    setTitle?.("Signup");
  }, []);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        passwordConfirm: "",
        phone: "",
      }}
      validationSchema={Yup.object().shape({
        firstname: Yup.string()
          .max(20, "Firstname must not exceed 20 characters")
          .required("Please enter your first name"),
        lastname: Yup.string()
          .max(20, "Lastname must not exceed 20 characters")
          .required("Please enter your last name"),
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Please enter your email"),
        password: Yup.string()
          .min(8, "Password is more than 8 characters")
          .max(30, "Password must not exceed 30 characters")
          .required("Please enter your password"),
        passwordConfirm: Yup.string()
          .required("Please enter your confirm password")
          .when("password", {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Both password need to be the same"
            ),
          }),
        phone: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid")
          .required("Please enter your phone"),
      })}
      onSubmit={async (dataForm: IFormValues) => {
        setLoading(true);
        let payload = {
          email: dataForm.email,
          fname: dataForm.firstname,
          lname: dataForm.lastname,
          password: dataForm.password,
          passwordConfirm: dataForm.passwordConfirm,
          phoneNumber: dataForm.phone,
        };

        let result = await fetchAuth.signup(payload);

        if (typeof result === "string") {
          setLoading(false);
          toast.error(result);
          return;
        }

        toast.success(result?.message);
        setEmail(dataForm.email);
        handleClickVerify?.();
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
                name="firstname"
                title="First Name"
                type="text"
                value={values.firstname}
                placeholder="Elon"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.firstname}
                touched={touched.firstname}
              />
              <Input
                name="lastname"
                title="Last Name"
                type="text"
                value={values.lastname}
                placeholder="Musk"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.lastname}
                touched={touched.lastname}
              />
              <Input
                name="email"
                title="Email"
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
              <Input
                name="passwordConfirm"
                title="Confirm Password"
                type={isShowPassword ? "text" : "password"}
                value={values.passwordConfirm}
                placeholder="12345678"
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
              <Input
                name="phone"
                title="Phone"
                type="text"
                value={values.phone}
                placeholder="0943987432"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.phone}
                touched={touched.phone}
              />
              <FormControl>
                <Button disabled={loading} type="submit" variant="container">
                  {loading ? <IconLoading /> : "Create account"}
                </Button>
                <Text>
                  By creating an account you agree to our <b>Terms</b> &{" "}
                  <b>Conditions</b>
                </Text>
                <Button
                  type="button"
                  onClick={() => setStateForm?.("LOGIN")}
                  variant="outlined"
                >
                  Alerady have an acctiont? Login
                </Button>
              </FormControl>
            </Form>
          </LoginContainer>
        );
      }}
    </Formik>
  );
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Main;
