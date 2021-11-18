import {
  ReactChild,
  RefObject,
  useRef,
  FocusEvent,
  EventHandler,
  ChangeEventHandler,
} from "react";
import styled from "styled-components";
import tw from "twin.macro";

const InputContainer = styled.div`
  ${tw`text-gray-600`}
`;
const Label = styled.label`
  ${tw`text-sm font-semibold`}
`;
const InputBox = styled.div<{ isError?: boolean }>`
  ${tw`mt-2 relative rounded border border-gray-300`}
  ${({ isError }) => isError && tw`border-red-600`}
`;
const InputText = styled.input`
  ${tw`h-20 outline-none w-full pl-4 font-normal text-xl`}
`;
const InputLeft = styled.div`
  ${tw`absolute top-1/2 -translate-y-1/2 right-3`}
`;
const ErrorMessage = styled.div`
  ${tw`text-red-500 pt-1 h-3`}
`;

interface IInput {
  name: string;
  value?: string;
  title: string;
  type: "text" | "password";
  placeholder?: string;
  iconLeft?: ReactChild;
  pattern?: string;
  errors?: string | undefined;
  touched?: boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = ({
  name,
  title,
  type = "text",
  placeholder,
  value,
  onChange,
  iconLeft,
  pattern,
  onBlur,
  errors,
  touched,
}: IInput) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <InputContainer>
      <Label htmlFor={name}>{title}</Label>
      <InputBox isError={!!(errors && touched)}>
        <InputText
          autoComplete="off"
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
          ref={ref}
          pattern={pattern}
          onChange={onChange}
          onBlur={onBlur}
        />
        <InputLeft>{iconLeft}</InputLeft>
      </InputBox>
      {<ErrorMessage>{errors && touched ? errors : ""}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
