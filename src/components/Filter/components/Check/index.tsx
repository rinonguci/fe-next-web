import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { handlePathQuery } from "@common/helper/path/handlePathQuery";

import { withRouter, SingletonRouter } from "next/router";
const CheckContainer = styled.div`
  ${tw`flex items-center gap-3`}
`;

const InputCheck = styled.input`
  ${tw`relative h-8 w-8`}

  &:after {
    ${tw`border border-black-lv1`}
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;

    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0xMDIxIDE0MWwzIDE3LTMgMTctMTEgMTUtNzEwIDcxMi0xMCA3LTcgMi0xMiAxLTEyLTEtMTItNi04LTZMMTQgNjczIDMgNjU4bC0zLTE3IDMtMTkgMTEtMTQgMTUtMTAgMTctMyAxNyAzIDE2IDEwIDE5MiAxOTMgNjc2LTY3NiAxNC0xMCAxOS0zIDE3IDMgMTMgMTAgMTEgMTZ6Ii8+PC9zdmc+")
      no-repeat 50%;
    background-size: 13px;

    border-radius: 3px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:checked:after {
    ${tw`bg-black-lv1`}
    background-color: black;
  }
`;

const Name = styled.span`
  ${tw`text-sm line-height[1] text-black-lv1`}
`;

interface ICheck {
  name: string;
  id: string;
  onClick: (id: string) => void;
  router?: SingletonRouter;
}

const Check: FC<ICheck> = ({ name, id }) => {
  const router = useRouter();
  const {
    query: { p },
  } = router;
  const [href, setHref] = useState<{ path: string; query?: string }>();

  useEffect(() => {
    setHref(handlePathQuery(router, id));
  }, [p]);

  const handlePushRouter = () => {
    router.push({ pathname: href?.path, query: href?.query }, undefined, {
      shallow: true,
    });
  };

  const handleChecked = (id: string) => {
    if (typeof p === "string") return p === id;
    if (p && p?.length > 1) return p.some((value) => value === id);
  };

  return (
    <CheckContainer>
      <InputCheck
        onChange={() => handlePushRouter()}
        checked={handleChecked(id)}
        id={id}
        type="checkbox"
      />
      <Name>{name}</Name>
    </CheckContainer>
  );
};

export default Check;
