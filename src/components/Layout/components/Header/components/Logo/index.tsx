import { FC } from "react";
import tw from "twin.macro";
import Image from "next/image";
import Link from "@designs/Link";

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
              src="/logo.svg"
              id="logo"
              alt="Logo of Summon"
              width={width}
              height={height}
              layout="fixed"
            />
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
