import { CartContext } from "../pages/Layout";
import styled, { keyframes } from "styled-components";
import { useContext } from "react";
import { Increase, Decrease, Quantity } from "./ProductInfo";
import { MainContext } from "../pages/Layout";
import CartIcon from "/assets/shared/desktop/icon-cart.svg";

export default function CartComponent() {
  const { state, dispatch } = useContext(CartContext);
  const { cartIsEmpty } = useContext(MainContext);

  console.log(state);
  const totalQuantity = state.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const handleRemove = () => {
    dispatch({ type: "clear-cart" });
  };

  const handleInc = (name: string) => {
    dispatch({ type: "cart-inc", payload: { name, quantity: 1 } });
  };

  const handleDec = (name: string) => {
    dispatch({ type: "cart-dec", payload: { name, quantity: 1 } });
  };

  const totalPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <CartContainer>
        {cartIsEmpty ? (
          <>
            <EmptyText>Your cart is empty</EmptyText>
            <EmptyCart src={CartIcon} />
          </>
        ) : (
          <>
            <CartHeader>
              <QuantityDisplay>CART ({totalQuantity})</QuantityDisplay>
              <RemoveButton onClick={handleRemove}>Remove all</RemoveButton>
            </CartHeader>
            <CartProducts>
              {state.cartItems.map((item) => {
                return (
                  <Product>
                    <ProductImg src={item.image} />
                    <NameAndPrice>
                      <ProductName>{item.name}</ProductName>
                      <Price>$ {item.price}</Price>
                    </NameAndPrice>
                    <ProductQuantity>
                      <Decrease onClick={() => handleDec(item.name)}>
                        -
                      </Decrease>
                      <Quantity>{item.quantity}</Quantity>
                      <Increase onClick={() => handleInc(item.name)}>
                        +
                      </Increase>
                    </ProductQuantity>
                  </Product>
                );
              })}
            </CartProducts>
            <TotalDiv>
              <TotalText>TOTAL</TotalText>
              <PriceText>$ {totalPrice}</PriceText>
            </TotalDiv>
            <CheckoutButton>CHECKOUT</CheckoutButton>
          </>
        )}
      </CartContainer>
    </>
  );
}

const SlideInCart = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 0;
  } 100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const EmptyTextAnimation = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const EmptyCart = styled.img`
  width: 9.5rem;
  filter: brightness(0) invert(0);
  margin: auto;
  animation-name: ${SlideInCart};
  animation-duration: 0.8s;
`;

const EmptyText = styled.h2`
  color: #00000099;
  font-size: 1.7rem;
  text-align: center;
  animation-name: ${EmptyTextAnimation};
  animation-duration: 0.5s;
`;

const SlideIn = keyframes`
  0% {
    transform: translateY(-20%) scale(0.95) translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1) translateX(-50%);
    opacity: 1;
  }
`;

const SlideInD = keyframes`
  0% {
    transform: translateY(-20%) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const CartContainer = styled.div`
  width: 90%;
  z-index: 100;
  background-color: white;
  padding: 3.1rem 2.8rem;
  position: fixed;
  top: 10.4rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3.1rem;
  animation-name: ${SlideIn};
  animation-duration: 0.4s;

  @media only screen and (min-width: 48rem) {
    width: 38rem;
    right: 4rem;
    left: unset;
    transform: unset;
    top: 12rem;
    padding: 3.1rem 3.3rem;
    animation-name: ${SlideInD};
    animation-duration: 0.2s;
  }

  @media only screen and (min-width: 90rem) {
    right: 16.5rem;
  }
`;

const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const QuantityDisplay = styled.h3`
  font-size: 1.8rem;
`;

const RemoveButton = styled.button`
  all: unset;
  cursor: pointer;
  text-decoration: underline;
  font-size: 1.5rem;
  color: #00000080;
`;

const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`;

const ProductImg = styled.img`
  width: 6.4rem;
  border-radius: 1rem;
`;

const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductName = styled.h4`
  font-size: 1.5rem;
  color: black;
`;

const Price = styled.span`
  font-size: 1.4rem;
  color: #0000006f;
`;

const ProductQuantity = styled.div`
  padding: 0.7rem 1.35rem;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9.6rem;
`;

const TotalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalText = styled.span`
  font-size: 1.5rem;
  color: #00000072;
`;

const PriceText = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: black;
`;

const CheckoutButton = styled.button`
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  background-color: #d87d4a;
  width: 100%;
  padding: 1.5rem 0;
  cursor: pointer;
  border: none;
`;
