import { FC, ReactChild } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonContainer = styled.button<{
  variant: IVariant;
  hoverColor?: string;
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
  &:hover {
    border: none;
    background-color: ${({ hoverColor }) => hoverColor} !important;
  }
`;

type IVariant = "text" | "container" | "outlined";
interface IButton {
  children?: ReactChild;
  variant: IVariant;
  rounded?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  className?: string;
  hoverColor?: string;
}

const Button: FC<IButton> = (props) => {
  const {
    className,
    style,
    children,
    variant,
    type,
    disabled,
    onClick,
    hoverColor,
  } = props;
  return (
    <ButtonContainer
      style={style}
      hoverColor={hoverColor}
      className={className}
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
