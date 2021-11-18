import Link from "@designs/Link";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import useWindowSize, { ISize } from "@hooks/useWindowSize";
import { ICategory } from "@interfaces/redux";
import { setOverflowMenu } from "@redux/slides/common/bodyOverflow";
import { FC, memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavDetailMobileExtra from "./components/NavDetailMobileExtra";
import NavDetailMobileItem from "./components/NavDetailMobileItem";

const NavDetailMobileContainer = styled.div`
  ${tw`w-[286px] bg-white fixed overflow-hidden z-50`}
  height: calc(100vh - 145.5px);
`;

const NavDetailMobileBox = styled.div`
  ${tw`flex flex-col`}
`;

const NavDetailMobileAuthItem = styled.span`
  ${tw`text-xs text-gray-700`}
`;

const NavDetailMobileAuth = styled.div`
  ${tw`py-6 px-4 border-b border-t`}
  & a:not(:first-of-type) ${NavDetailMobileAuthItem} {
    ${tw`pl-6`}
  }
  & a ${NavDetailMobileAuthItem} {
    ${tw`pr-6`}
  }
`;

const NavDetailMobileAuthTitle = styled.div`
  ${tw`uppercase text-base font-medium text-gray-700`}
`;

const NavDetailMobileList = styled.div`
  ${tw`mb-4`}
`;

const NavDetailMobileMoney = styled.div`
  ${tw`px-4 text-gray-700`}

  span {
    ${tw`text-gray-700`}
  }
`;

interface INavDetailMobile {}

const NavDetailMobile: FC<INavDetailMobile> = () => {
  const dispatch = useAppDispatch();
  const { overflowMenu } = useAppSelector(
    (state) => state.commonReducers.bodyReducer
  );
  const { categories } = useAppSelector((state) => state.categoriesReducers);

  const windowSize: ISize = useWindowSize();
  const [stateExtra, setStateExtra] = useState<boolean>(false);
  const [dataExtra, setDataExtra] = useState<Array<ICategory> | null>();

  const handleClose = useCallback((e: MouseEvent) => {
    const element: HTMLDivElement | null = e?.target as HTMLDivElement;
    if (element.dataset?.element) return;

    dispatch(setOverflowMenu(false));
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClose, false);

    return () => {
      document.removeEventListener("click", handleClose, false);
    };
  }, []);

  useEffect(() => {});

  useEffect(() => {
    if (!overflowMenu) return;
    if (windowSize && windowSize.width) {
      if (windowSize.width > 767) {
        dispatch(setOverflowMenu(false));
      }
    }
  }, [windowSize]);

  const handelExtra = (state: boolean, data?: Array<ICategory>) => {
    setStateExtra(state);
    setDataExtra(data);
  };

  const ListMemo = memo(function List() {
    return (
      <NavDetailMobileList data-element="menu-mobile-list">
        <NavDetailMobileItem onClick={() => handelExtra(true)}>
          {`Whats's New`}
        </NavDetailMobileItem>
        {categories?.map((value) => (
          <NavDetailMobileItem
            key={value._id}
            iconLeft
            onClick={() => handelExtra(true, value?.children)}
          >
            {value.name}
          </NavDetailMobileItem>
        ))}
      </NavDetailMobileList>
    );
  });

  return (
    <NavDetailMobileContainer>
      <NavDetailMobileBox>
        <NavDetailMobileAuth>
          <NavDetailMobileAuthTitle>Welcome</NavDetailMobileAuthTitle>
          <Link href="/login">
            <NavDetailMobileAuthItem>Sign In</NavDetailMobileAuthItem>
          </Link>
          |
          <Link href="/signup">
            <NavDetailMobileAuthItem>Create Account</NavDetailMobileAuthItem>
          </Link>
        </NavDetailMobileAuth>
        <ListMemo />
        <NavDetailMobileMoney>
          <b>VND</b> Việt Nam Đồng
        </NavDetailMobileMoney>
      </NavDetailMobileBox>

      <NavDetailMobileExtra
        stateExtra={stateExtra}
        data={dataExtra}
        onClick={() => handelExtra(false)}
      />
    </NavDetailMobileContainer>
  );
};

export default NavDetailMobile;
