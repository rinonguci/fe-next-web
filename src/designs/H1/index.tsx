import { FC } from "react";
import tw from "twin.macro";

interface IH1 {}

const H1: FC<IH1> = ({ children }) => {
  return <H1Container>{children}</H1Container>;
};

export default H1;

const H1Container = tw.h2`block m-0 font-bold text-[3rem] text-white`;
