import Image from "next/image";
import tw from "twin.macro";
import styled from "styled-components";

const NavImageContainer = styled.div`
  ${tw`lg:hidden`}
`;

const NavImage = () => {
  const HEIGHT = 700;
  return (
    <NavImageContainer>
      <Image
        alt="Ảnh"
        src="/baby.jpg"
        layout="fixed"
        height={HEIGHT}
        width={(HEIGHT * 360) / 880}
      />
      <span
        className="menu-banner-text"
        style={{ color: "#000000", fontSize: "1.6em" }}
      >
        Childrensalon Essentials
      </span>
      <span className="menu-banner-shop">Shop Now</span>
    </NavImageContainer>
  );
};

export default NavImage;
