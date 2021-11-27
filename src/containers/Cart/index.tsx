import Layout from "@components/Layout";
import { useAppSelector } from "@hooks/redux";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Item from "./components/Item";

const CartContainer = styled.div`
  ${tw`container mx-auto mt-20 xl:px-20 lg:px-4 px-96`}
`;
const CartBox = styled.div`
  ${tw`grid lg:block`}
  grid-template-columns: 1fr 300px;
`;
const CartList = styled.ul`
  ${tw``}
`;
const CartItem = styled.li`
  ${tw`py-4 border-t last:border-b`}
`;
const CartControl = styled.div`
  ${tw``}
`;
const Title = styled.h3`
  ${tw`text-3xl font-bold mb-10`}
`;

interface ICart {}

const Cart: FC<ICart> = () => {
  const { cart } = useAppSelector((state) => state.userReducers);

  return (
    <Layout>
      <CartContainer>
        <Title>Shopping Bag</Title>
        <CartBox>
          <CartList>
            {cart &&
              cart.map((value) => (
                <CartItem key={value._id}>
                  <Item data={value} />
                </CartItem>
              ))}
          </CartList>
          <CartControl></CartControl>
        </CartBox>
      </CartContainer>
    </Layout>
  );
};

export default Cart;
