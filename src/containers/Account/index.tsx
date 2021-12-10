import { FC, useContext, useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Layout, { PopupContext } from "@components/Layout";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { useRouter } from "next/router";
import isNullObject from "@common/function/isNullObject";
import IconSVG from "@designs/IconSVG";
import PasswordForm from "./components/PasswordForm";

import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import TableBill from "./components/TabelBill";
import fetchAuth from "@services/auth";
import { toast } from "react-toastify";
import convertBase64 from "@common/helper/convertBase64";
import { logout, uploadImage } from "@redux/slices/user";

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
    height: 50%;
    z-index: -1;
  }
`;
const AccountMain = styled.div`
  ${tw`flex gap-12 p-20`}
`;
const ImageBox = styled.div`
  ${tw`relative flex-shrink-0 h-[220px] w-[220px] rounded-full overflow-hidden border border-gray-600`}
`;
const InputLabel = styled.label`
  ${tw`absolute text-white px-60 pb-10 pt-3 cursor-pointer`}
  width: max-content;
  background-color: #0000007a;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;
const LabelText = styled.span`
  ${tw`text-white text-sm font-semibold cursor-pointer`}
`;

const Input = styled.input`
  ${tw``}
`;
const Image = styled.img`
  ${tw`block h-full w-full object-cover`}
`;
const AccountContent = styled.div`
  ${tw`flex justify-between w-full`}
`;
const Info = styled.div`
  ${tw``}
`;
const Logout = styled.div`
  ${tw`float-right`}
`;
const Name = styled.span`
  ${tw`block text-3xl font-bold line-height[1] pb-4`}
`;
const Mail = styled.span`
  ${tw`text-xl font-normal`}
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
const AccountRight = styled.div`
  ${tw`w-full`}
`;
const PasswordFormBox = styled.div`
  ${tw`mt-32`}
`;
const TableBillContaier = styled.div`
  ${tw``}
`;

interface IAccount {}

const Account: FC<IAccount> = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.userReducers);
  const [image, setImage] = useState(
    "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
  );

  if (isNullObject(user)) {
    router.push("/");
  }

  useEffect(() => {
    if (user.photo) {
      setImage(user.photo);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    router.push("/home");
  };

  const onChange = async (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };

    let base64 = await convertBase64(files[0]);
    handleChangeImageApi(base64);

    reader.readAsDataURL(files[0]);
  };

  const handleChangeImageApi = async (base64: any) => {
    let payload = { photo: base64 };
    dispatch(uploadImage(payload));
  };

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
              <InputLabel htmlFor="select" className="text-center">
                <LabelText>Upload Image</LabelText>
              </InputLabel>
              <Input
                id="select"
                className="hidden"
                type="file"
                onChange={onChange}
              />
              <Image src={image} />
            </ImageBox>
            <AccountRight>
              <AccountContent>
                <Info>
                  <Name>{user.fname + " " + user.lname}</Name>
                  <Mail>{user.email}</Mail>
                </Info>
                <Logout onClick={() => handleLogout()}>
                  <IconSVG
                    style={{ height: "40px", width: "40px" }}
                    iconHref="/icon.svg#svgs-logout"
                  />
                </Logout>
              </AccountContent>
              <PasswordFormBox>
                <PasswordForm />
              </PasswordFormBox>
            </AccountRight>
          </AccountMain>
        </AccountBox>

        <TableBillContaier>
          <TableBill />
        </TableBillContaier>
      </AccountContainer>
    </Layout>
  );
};

export default Account;
