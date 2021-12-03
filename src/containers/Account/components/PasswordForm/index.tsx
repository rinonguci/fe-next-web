import { FC, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Input from "@designs/Input";
import Button from "@designs/Button";

const PasswordFormContainer = styled.div`
  ${tw``}
`;
const Form = styled.form`
  ${tw`grid gap-20`}
  grid-template-columns: 1fr 200px;
`;
const FormControl = styled.div`
  ${tw`flex-grow`}
  align-self: self-end;
`;

interface IPasswordForm {}

interface IFormValues extends IPasswordForm {
  password: string;
  confirmPassword: string;
}

const PasswordForm: FC<IPasswordForm> = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <Formik
      initialValues={{
        password: "12345678",
        confirmPassword: "12345678s",
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
          // let result = await fetchAuth.login(payload);
          // if (typeof result === "string") {
          //   toast.error(result);
          //   return;
          // }
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
          <PasswordFormContainer>
            <Form onSubmit={handleSubmit}>
              <Input
                disableMessage={false}
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
                  Change
                </Button>
              </FormControl>
            </Form>
          </PasswordFormContainer>
        );
      }}
    </Formik>
  );
};

export default PasswordForm;
