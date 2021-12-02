import Layout from "@components/Layout";
import { useAppSelector } from "@hooks/redux";
import { FC } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Item from "./components/Item";

const WishlistContainer = styled.div`
  ${tw`container lg:max-w-full mx-auto mt-10 lg:mt-10 lg:px-4 xl:px-[100px] 2xl:px-[200px] px-[260px]`}
`;

const WishlistBox = styled.div`
  ${tw``}
`;

const WishlistMain = styled.div`
  ${tw`grid gap-4`}

  grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));

  @media (max-width: 639px) {
    ${tw`flex flex-col`}
  }
`;

const Title = styled.h3`
  ${tw`text-4xl font-bold text-center mb-6`}
`;

interface IWishlist {}

const Wishlist: FC<IWishlist> = () => {
  const { wishlist } = useAppSelector((state) => state.userReducers);

  return (
    <Layout>
      <WishlistContainer>
        <WishlistBox>
          <Title>Wishlist</Title>
          <WishlistMain>
            {wishlist.map((value) => (
              <Item key={value._id} data={value} />
            ))}
          </WishlistMain>
        </WishlistBox>
      </WishlistContainer>
    </Layout>
  );
};

export default Wishlist;
