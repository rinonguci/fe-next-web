import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonContainer = styled.button<{
  variant: IVariant;
}>`
  ${tw`block w-full h-20 text-center rounded text-white font-bold text-lg flex-grow`}
  ${({ variant }) => {
    switch (variant) {
      case "text":
        return tw``;
      case "container":
        return tw`text-blue-50 bg-green-500 hover:bg-green-600`;
      case "outlined":
        return tw`border border-gray-700 text-black-lv1 font-semibold hover:text-white hover:bg-gray-700 `;
    }
  }}
`;

type IVariant = "text" | "container" | "outlined";
interface IButton {
  children?: string;
  variant: IVariant;
  rounded?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  children,
  variant,
  type,
  disabled,
  onClick,
}) => {
  return (
    <ButtonContainer
      disabled={disabled}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
