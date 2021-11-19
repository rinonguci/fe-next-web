import Layout from "@components/Layout";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const WishlistContainer = styled.div`
  ${tw``}
`;

interface IWishlist {}

const Wishlist: FC<IWishlist> = () => {
  return (
    <Layout>
      <WishlistContainer></WishlistContainer>
    </Layout>
  );
};

export default Wishlist;
