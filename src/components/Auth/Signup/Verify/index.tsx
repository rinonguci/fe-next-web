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
import { EmailContext } from "..";

const LoginContainer = styled.div`
  ${tw``}
`;
const Form = styled.form`
  ${tw`grid gap-6 py-10`}
`;
const FormControl = styled.div`
  ${tw`grid gap-4 mt-4`}
`;
const Notify = styled.p`
  ${tw`text-center font-semibold`}
`;
const Text = styled.span`
  ${tw`text-center`}
`;

interface IVerify {
  handleClickVerify?: () => void;
}
interface IFormValues {
  code: string;
}

const Verify: FC<IVerify> = ({ handleClickVerify }) => {
  const { getEmail } = useContext(EmailContext);
  const [loading, setLoading] = useState<boolean>(false);
  const { setTitle, setStateForm } = useContext(AuthContext);

  useEffect(() => {
    setTitle?.("Verify Account");
  }, []);

  return (
    <Formik
      initialValues={{
        code: "",
      }}
      validationSchema={Yup.object().shape({
        code: Yup.string()
          .matches(phoneRegExp, "Code is not valid")
          .required("Please enter your code"),
      })}
      onSubmit={async (dataForm: IFormValues) => {
        setLoading(true);
        let payload = {
          verifyCode: dataForm.code,
          email: getEmail(),
        };

        let result = await fetchAuth.verify(payload);

        if (typeof result === "string") {
          setLoading(false);
          toast.error(result);
          return;
        }
        toast.success("You have successfully registered");

        setStateForm?.("LOGIN");
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
                The verification code has been sent to your email. If you don't
                see it, please check your spam folder
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
              <FormControl>
                <Button type="submit" variant="container">
                  {loading ? <IconLoading /> : "Confirm"}
                </Button>

                <Button
                  type="button"
                  onClick={() => handleClickVerify && handleClickVerify()}
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
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Verify;
