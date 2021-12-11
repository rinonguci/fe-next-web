import isNullObject from "@common/function/isNullObject";
import Layout from "@components/Layout";
import Button from "@designs/Button";
import { useAppSelector } from "@hooks/redux";
import { useRouter } from "next/router";
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
  ${tw`text-5xl font-bold line-height[1] mb-2`}
`;
const Message = styled.p`
  ${tw`text-base font-semibold mb-8`}
`;

interface IWishlist {}

const Wishlist: FC<IWishlist> = () => {
  const { wishlist } = useAppSelector((state) => state.userReducers);
  const { user } = useAppSelector((state) => state.userReducers);
  const router = useRouter();

  if (isNullObject(user)) {
    router.push("/");
  }

  return (
    <Layout>
      <WishlistContainer>
        <WishlistBox>
          <Title>Wishlist</Title>
          {wishlist.length === 0 && (
            <>
              <Message>You have no items in your wishlist.</Message>
              <Button style={{ width: "200px" }} variant="container">
                Go Shopping
              </Button>
            </>
          )}

          <WishlistMain>
            {wishlist.map((value) => (
              <Item key={value.id} data={value} />
            ))}
          </WishlistMain>
        </WishlistBox>
      </WishlistContainer>
    </Layout>
  );
};

export default Wishlist;
