import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { handlePathQuery } from "@common/helper/path/handlePathQuery";

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
  nameFilter: string;
}

const Check: FC<ICheck> = ({ name, id, nameFilter }) => {
  const router = useRouter();
  const {
    query: { p },
  } = router;
  const [href, setHref] =
    useState<{ path: string; query?: { p: string[]; sort: string[] } }>();
  var ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    handleChecked(id);
  }, [p]);

  useEffect(() => {
    let url = new URL(location.origin + router.asPath);

    setHref(handlePathQuery(url, id));
  }, [p]);

  const handlePushRouter = () => {
    router.push({ pathname: href?.path, query: href?.query }, undefined, {
      shallow: true,
    });
  };

  const handleChecked = (id: string) => {
    let url = new URL(location.origin + router.asPath);

    let check = url?.searchParams.getAll("p").some((value) => value === id);

    if (ref?.current) ref.current.checked = check;
  };

  return (
    <CheckContainer>
      <InputCheck
        ref={ref}
        onChange={() => handlePushRouter()}
        data-filterid={id}
        data-namefilter={nameFilter}
        data-checkedfilter={ref.current?.checked}
        type="checkbox"
      />
      <Name>{name}</Name>
    </CheckContainer>
  );
};

export default Check;
