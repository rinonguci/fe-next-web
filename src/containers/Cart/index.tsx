import isNullObject from "@common/function/isNullObject";
import Layout from "@components/Layout";
import Paypal from "@components/PaypalButton";
import { useAppSelector } from "@hooks/redux";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Item from "./components/Item";

const CartContainer = styled.div`
  ${tw`container mx-auto mt-20 xl:px-20 lg:px-4 2xl:px-60 px-96`}
`;
const CartBox = styled.div`
  ${tw`grid lg:block gap-10`}
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
const Subtotal = styled.div`
  ${tw`mt-4 flex justify-between text-lg font-medium`}
`;
const SubtotalTitle = styled.span`
  ${tw``}
`;
const SubtotalPrice = styled.span`
  ${tw``}
`;
const PaypalBox = styled.div`
  ${tw`mt-4 z-0`}
`;
interface ICart {}

const Cart: FC<ICart> = () => {
  const { cart } = useAppSelector((state) => state.userReducers);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    handleTotalPrice();
  }, [cart]);

  const handleTotalPrice = () => {
    let totalPrice = cart.reduce(
      (result: number, value) => result + value.price * value.quantity,
      0
    );
    setTotal(totalPrice);
  };

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
          {!isNullObject(cart) && (
            <CartControl>
              <Subtotal>
                <SubtotalTitle>Total</SubtotalTitle>
                <SubtotalPrice>${total}</SubtotalPrice>
              </Subtotal>
              <PaypalBox>
                <Paypal data={cart} price={total + ""} />
              </PaypalBox>
            </CartControl>
          )}
        </CartBox>
      </CartContainer>
    </Layout>
  );
};

export default Cart;
