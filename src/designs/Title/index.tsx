import { FC } from "react";
import tw from "twin.macro";

interface ITitle {}

const Title: FC<ITitle> = ({ children }) => {
  return <TitleContainer>{children}</TitleContainer>;
};

export default Title;

const TitleContainer = tw.h1``;
