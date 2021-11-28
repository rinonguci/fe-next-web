import { FC, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Layout from "@components/Layout";
import { useAppSelector } from "@hooks/redux";
import { useRouter } from "next/router";
import isNullObject from "@common/function/isNullObject";
const AccountContainer = styled.div`
  ${tw`max-w-[1008px] mx-auto mt-20 `}
`;
const AccountBox = styled.div`
  ${tw`relative border border-gray-400 `}
  &:before {
    content: "";
    position: absolute;
    background-color: #ebebeb;
    width: 100%;
    height: 60%;
    z-index: -1;
  }
`;
const AccountMain = styled.div`
  ${tw`flex gap-12 p-20`}
`;
const ImageBox = styled.div`
  ${tw`h-[220px] w-[220px] rounded-full overflow-hidden border border-gray-600`}
`;
const Image = styled.img`
  ${tw`block h-full w-full object-cover`}
`;
const AccountContent = styled.div`
  ${tw`py-4`}
`;
const Info = styled.div`
  ${tw``}
`;
const Name = styled.span`
  ${tw`block text-3xl font-bold`}
`;
const Mail = styled.span`
  ${tw`text-xl font-normal`}
`;
const Logout = styled.div`
  ${tw``}
`;
const Nav = styled.div`
  ${tw`bg-white`}
`;
const NavList = styled.ul`
  ${tw`w-full grid grid-cols-5`}
`;
const NavItem = styled.li`
  ${tw`text-center py-4 font-medium text-base border-r border-gray-500`}
  background-color: #ebebeb;
`;

interface IAccount {}

const Account: FC<IAccount> = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.userReducers);
  useEffect(() => {
    if (isNullObject(user)) {
      router.push("/");
    }
  }, []);

  return (
    <Layout>
      <AccountContainer>
        <AccountBox>
          <Nav>
            <NavList>
              <NavItem>My Details</NavItem>
            </NavList>
          </Nav>
          <AccountMain>
            <ImageBox>
              <Image src="https://cdn.childrensalon.com/media/customer/profile/e/7/e76964d65f9a636fb308e884ab70599fc61551c1.jpg" />
            </ImageBox>
            <AccountContent>
              <Info>
                <Name>Phat Pham Minh</Name>
                <Mail>minhphatdev@gmail.com</Mail>
              </Info>
              <Logout />
            </AccountContent>
          </AccountMain>
        </AccountBox>
      </AccountContainer>
      ;
    </Layout>
  );
};

export default Account;
