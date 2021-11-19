import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import IconLeft from "./components/IconLeft";
import IconRight from "./components/IconRight";
import Logo from "../Logo";
import isNullObject from "@common/function/isNullObject";
import { setOverflowMenu, setOverflowUser } from "@redux/slides/ui";
import HoverDropdown from "./components/HoverDropdown";

const HeaderTopContainer = styled.div`
  ${tw`md:pt-8 pt-14 text-2xl`}
`;
const NavExtra = styled.div`
  ${tw`flex justify-between md:mx-4 lg:mx-10 mx-20 text-xl font-medium`}
`;
const NavExtraLeft = styled.div`
  ${tw`flex gap-10`}
`;
const NavExtraRight = styled.div`
  ${tw`flex gap-10`}
`;
const UserIcon = styled.div`
  ${tw`md:hidden`}
`;
const HumburgerIcon = styled.div`
  ${tw`md:block hidden`}
`;
const WishlistIcon = styled.div`
  ${tw``}
`;
const CartIcon = styled.div`
  ${tw``}
`;

interface IHeaderTop {}

const HeaderTop: FC<IHeaderTop> = () => {
  const dispatch = useAppDispatch();
  const { user, wishlist } = useAppSelector((state) => state.userReducers);

  const { overflowMenu, overflowUser } = useAppSelector(
    (state) => state.uiReducers
  );

  const handleClickMenuMobile = () => {
    dispatch(setOverflowMenu(!overflowMenu));
  };

  const handleOpenLogin = () => {
    dispatch(setOverflowUser(!overflowUser));
  };

  return (
    <HeaderTopContainer>
      <Logo width={230} height={50} />
      <NavExtra>
        <NavExtraLeft>
          <UserIcon>
            <IconLeft
              onClick={handleOpenLogin}
              title={isNullObject(user) ? "Sign In" : "My Account"}
              icon="/icon.svg#svgs-account"
            />
          </UserIcon>
          <HumburgerIcon>
            <IconLeft
              style={{ pointerEvents: overflowMenu ? "none" : "auto" }}
              onClick={() => handleClickMenuMobile()}
              href="/login"
              icon="/icon.svg#svgs-burger"
            />
          </HumburgerIcon>

          <IconLeft href="/help" title="Search" icon="/icon.svg#svgs-search" />
        </NavExtraLeft>
        <NavExtraRight>
          <WishlistIcon>
            <IconRight
              href="/wishlist"
              icon="/icon.svg#svgs-wish-main"
              title="Wishlist"
              itemCount={wishlist?.length || 0}
            />
          </WishlistIcon>
          <CartIcon>
            <IconRight
              href="/cart"
              icon="/icon.svg#svgs-bag"
              title="Shopping Bag"
              itemCount={1}
            />
          </CartIcon>
        </NavExtraRight>
      </NavExtra>
    </HeaderTopContainer>
  );
};

export default HeaderTop;
