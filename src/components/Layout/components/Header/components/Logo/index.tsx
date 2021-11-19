import { FC } from "react";
import tw from "twin.macro";
import Link from "@designs/Link";
import styled from "styled-components";

interface ILogo {
  width: string | number;
  height: string | number;
}

const Logo: FC<ILogo> = ({ width, height }) => {
  return (
    <LogoContainer>
      <Picture>
        <Link href="/home">
          <ImageBox>
            <Image src="/logo.svg" id="logo" alt="Logo of Summon" />
          </ImageBox>
        </Link>
      </Picture>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = tw.div``;
const Picture = tw.picture``;
const ImageBox = tw.div`h-20 absolute left-1/2 transform -translate-x-1/2`;
const Image = styled.img`
  ${tw`h-20 xl:h-16 sm:h-12`}
`;
