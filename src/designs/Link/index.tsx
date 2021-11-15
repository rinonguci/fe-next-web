import { FC } from "react";
import NextLink from "next/link";

interface ILink {
  href?: any;
}

const Link: FC<ILink> = ({ children, href }, props) => {
  return (
    <NextLink href={href || "/notfound"}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
