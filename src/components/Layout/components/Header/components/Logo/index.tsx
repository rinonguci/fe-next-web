import { FC } from "react";
import tw from "twin.macro";
import Link from "@designs/Link";
import styled from "styled-components";

const LogoContainer = styled.div`
  ${tw``}
`;
const Picture = styled.picture`
  ${tw``}
`;
const ImageBox = styled.div`
  ${tw`h-20 absolute top[50%] xl:top[70%] md:top[100%]`}

  left: 50%;
  transform: translate(-50%, -50%);
`;
const Image = styled.img`
  ${tw`h-24 xl:h-16 sm:h-12`}
`;

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
            <Image
              src="https://f002.backblazeb2.com/file/summonshop/logo.png"
              id="logo"
              alt="Logo of Summon"
            />
          </ImageBox>
        </Link>
      </Picture>
    </LogoContainer>
  );
};

export default Logo;
