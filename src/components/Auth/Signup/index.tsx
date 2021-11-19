import Button from "@designs/Button";
import Input from "@designs/Input";
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
const Text = styled.span`
  ${tw`text-center`}
`;

interface ISignup {
  handleClickForm?: () => void;
}
interface IFormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
}

const Signup: FC<ISignup> = ({ handleClickForm }) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <Formik
      initialValues={{
        firstname: "Phát",
        lastname: "Phạm",
        email: "minhphatdev@gmail.com",
        password: "12345678",
        passwordConfirm: "12345678",
        phone: "0943987432",
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
      onSubmit={async (dataForm) => {
        let payload = {
          email: dataForm.email,
          fname: dataForm.firstname,
          lname: dataForm.lastname,
          password: dataForm.password,
          passwordConfirm: dataForm.passwordConfirm,
          phoneNumber: dataForm.phone,
        };
        try {
          await fetchAuth.signup(payload);

          handleClickForm?.();
          toast.success("You have successfully registered");
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
                name="firstname"
                title="First Name"
                type="text"
                value={values.firstname}
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
              <Input
                name="phone"
                title="Phone"
                type="text"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.phone}
                touched={touched.phone}
              />
              <FormControl>
                <Button type="submit" variant="container">
                  Create account
                </Button>
                <Text>
                  By creating an account you agree to our <b>Terms</b> &{" "}
                  <b>Conditions</b>
                </Text>
                <Button
                  type="button"
                  onClick={() => handleClickForm && handleClickForm()}
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

export default Signup;
