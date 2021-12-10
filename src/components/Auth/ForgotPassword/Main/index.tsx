import { AuthContext } from "@components/Auth";
import Button from "@designs/Button";
import Input from "@designs/Input";
import fetchAuth from "@services/auth";
import { Formik } from "formik";
import { FC, useContext, useEffect } from "react";
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
  email: string;
}

const Main: FC<ILogin> = ({ handleClickVerify }) => {
  const { setTitle, setStateForm } = useContext(AuthContext);
  const { setEmail } = useContext(EmailContext);
  useEffect(() => {
    handleSetTitle("Forgot Password");
  }, []);

  const handleSetTitle = (text: string) => {
    setTitle?.(text);
  };

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Please enter your email"),
      })}
      onSubmit={async (payload: IFormValues) => {
        try {
          let result = await fetchAuth.forgotPassword(payload);

          if (typeof result === "string") {
            toast.error(result);
            return;
          }

          setEmail(payload.email);
          handleClickVerify?.();
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
                name="email"
                title="Email address"
                type="text"
                value={values.email}
                placeholder="elonmusk@summon.com"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.email}
                touched={touched.email}
              />
              <FormControl>
                <Button type="submit" variant="container">
                  Send
                </Button>
                <Button
                  type="button"
                  onClick={() => setStateForm?.("LOGIN")}
                  variant="outlined"
                >
                  It you can remember it, go back to login
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
