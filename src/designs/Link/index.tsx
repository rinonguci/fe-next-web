import { FC, MouseEvent } from "react";
import { LinkProps } from "next/link";
import { useAppDispatch } from "@hooks/redux";
import { useRouter } from "next/router";
import { setStatusLoading } from "@redux/slices/ui";

interface ILink extends LinkProps {}

const Link: FC<ILink> = (props) => {
  const { children, href, shallow } = props;

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLoading = (e: MouseEvent<HTMLAnchorElement>) => {
    dispatch(setStatusLoading({ status: "start", to: "link", time: 10 }));
    if (!shallow) {
      e.preventDefault();
      router.push(href);
    }
  };
  return (
    <a
      {...props}
      onClick={(e) => handleLoading(e)}
      href={href.toString() || "/notfound"}
    >
      {children}
    </a>
  );
};

export default Link;
