import { FC } from "react";
import tw from "twin.macro";

interface IH2 {}

const H2: FC<IH2> = ({ children }) => {
  return <H2Container>{children}</H2Container>;
};

export default H2;

const H2Container = tw.h2`block m-0 font-bold text-[15px]`;
