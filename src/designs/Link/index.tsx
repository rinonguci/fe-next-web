import { FC, MouseEvent } from "react";
import { LinkProps } from "next/link";
import { useAppDispatch } from "@hooks/redux";
import { setStatusLoading } from "@redux/slides/common/loading";
import { useRouter } from "next/router";

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
    <a {...props} onClick={handleLoading} href={href.toString() || "/notfound"}>
      {children}
    </a>
  );
};

export default Link;
