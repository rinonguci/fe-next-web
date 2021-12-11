import isNullObject from "@common/function/isNullObject";
import Layout from "@components/Layout";
import Paypal from "@components/PaypalButton";
import Button from "@designs/Button";
import { useAppSelector } from "@hooks/redux";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
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
  ${tw`text-5xl font-bold line-height[1] mb-4`}
`;
const Message = styled.p`
  ${tw`text-base font-semibold mb-8`}
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
  const ref = useRef<boolean>(false);
  const { user } = useAppSelector((state) => state.userReducers);
  const router = useRouter();

  if (isNullObject(user)) {
    router.push("/");
  }

  useEffect(() => {
    handleTotalPrice();
  }, [cart]);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      return;
    }
    location.reload();
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
        {cart.length === 0 && (
          <>
            <Message>You have no items in your shopping bag.</Message>
            <Button style={{ width: "200px" }} variant="container">
              Go Shopping
            </Button>
          </>
        )}
        <CartBox>
          <CartList>
            {cart?.map((value) => (
              <CartItem key={value.id}>
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
