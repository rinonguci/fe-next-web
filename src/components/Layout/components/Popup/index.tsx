import { FC, useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PopupContext } from "@components/Layout";

const PopupContainer = styled.div`
  ${tw`fixed w-[100%] h-[100vh] z-[999999999999] flex justify-center items-center`}

  background: #333333a0;
`;

const PopupBox = styled.div`
  ${tw`min-w-[600px]`}
`;

interface IPopup {}

const Popup: FC<IPopup> = () => {
  const { refPopup, isPopup, element, setElement } = useContext(PopupContext);

  return (
    <PopupContainer>
      <PopupBox ref={refPopup}>{element}</PopupBox>
    </PopupContainer>
  );
};

export default Popup;
