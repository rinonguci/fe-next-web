import { CSSProperties, FC, Fragment } from "react";
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

const LoadingRotate = styled.div<{ border: number; widtH: number }>`
  ${tw`absolute rounded-full border-transparent border-t-green-400 z-10`}
  animation: ${rotate} 2s linear infinite;
  border: ${({ border }) => border + "px"} solid transparent;
  border-top: ${({ border }) => border + "px"} solid #47c562;
  width: ${({ widtH }) => widtH + "px"};
  aspect-ratio: 1 / 1;
`;
const LoadingBox = styled.div<{ border: number; widtH: number }>`
  ${tw`rounded-full z-10`}
  border: ${({ border }) => border + "px"} solid #dfdfdf;
  width: ${({ widtH }) => widtH + "px"};
  aspect-ratio: 1 / 1;
`;

interface IIconLoading {
  border?: number;
  widtH?: number;
  style?: CSSProperties;
}

const IconLoading: FC<IIconLoading> = ({ border = 4, widtH = 26, style }) => {
  return (
    <IconLoadingContainer>
      <IconLoadingBox style={style}>
        <LoadingRotate widtH={widtH} border={border}></LoadingRotate>
        <LoadingBox widtH={widtH} border={border}></LoadingBox>
      </IconLoadingBox>
    </IconLoadingContainer>
  );
};

export default IconLoading;
