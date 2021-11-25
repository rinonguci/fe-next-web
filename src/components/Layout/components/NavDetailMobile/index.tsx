import Link from "@designs/Link";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import useToggleAndCloseVer2 from "@hooks/useToggleAndCloseVer2";
import useWindowSize, { ISize } from "@hooks/useWindowSize";
import { setOverflowMenu } from "@redux/slices/ui";
import { ICategory } from "@redux/types/common";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavDetailMobileExtra from "./components/NavDetailMobileExtra";
import NavDetailMobileItem from "./components/NavDetailMobileItem";

const NavDetailMobileContainer = styled.div<{ isActive: boolean }>`
  ${tw`bg-white fixed overflow-hidden z-50`}
  height: calc(100vh - 145.5px);
  width: 286px;

  transition: transform 300ms ease-in;
  transform: ${({ isActive }) =>
    isActive ? "translateX(0)" : "translateX(-286px)"};
`;

const NavDetailWrraper = styled.div`
  ${tw``}
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
  const { overflowMenu } = useAppSelector((state) => state.uiReducers);
  const { categories } = useAppSelector((state) => state.commonReducers);

  const windowSize: ISize = useWindowSize();
  const [stateExtra, setStateExtra] = useState<boolean>(false);
  const [dataExtra, setDataExtra] = useState<Array<ICategory> | null>();

  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useToggleAndCloseVer2(ref);

  useEffect(() => {
    if (isOpen) return;
    dispatch(setOverflowMenu(false));
  }, [isOpen]);

  useEffect(() => {
    if (!overflowMenu) return;
    setIsOpen(true);
  }, [overflowMenu]);

  useEffect(() => {
    if (!overflowMenu) return;
    if (windowSize && windowSize.width) {
      if (windowSize.width > 767) {
        setIsOpen(false);
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
    <NavDetailMobileContainer isActive={isOpen}>
      {isOpen && (
        <NavDetailWrraper ref={ref}>
          <NavDetailMobileBox>
            <NavDetailMobileAuth>
              <NavDetailMobileAuthTitle>Welcome</NavDetailMobileAuthTitle>
              <Link href="/login">
                <NavDetailMobileAuthItem>Sign In</NavDetailMobileAuthItem>
              </Link>
              |
              <Link href="/signup">
                <NavDetailMobileAuthItem>
                  Create Account
                </NavDetailMobileAuthItem>
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
        </NavDetailWrraper>
      )}
    </NavDetailMobileContainer>
  );
};

export default NavDetailMobile;
