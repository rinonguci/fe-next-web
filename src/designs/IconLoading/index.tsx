import { FC, Fragment } from "react";
import { keyframes } from "styled-components";
import tw from "twin.macro";
import styled from "styled-components";

const IconLoadingContainer = styled.div`
  ${tw`relative w-full h-full`}
`;

const IconLoadingBox = styled.div`
  ${tw`absolute`}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingRotate = styled.div`
  ${tw`absolute rounded-full border-[4px] border-transparent border-t-green-400 h-10 w-10 z-10`}
  animation: ${rotate} 2s linear infinite;
`;
const LoadingBox = styled.div`
  ${tw`rounded-full border-[4px] border-gray-100  h-10 w-10 z-10`}
`;

interface IIconLoading {}

const IconLoading: FC<IIconLoading> = () => {
  return (
    <IconLoadingContainer>
      <IconLoadingBox>
        <LoadingRotate></LoadingRotate>
        <LoadingBox></LoadingBox>
      </IconLoadingBox>
    </IconLoadingContainer>
  );
};

export default IconLoading;
