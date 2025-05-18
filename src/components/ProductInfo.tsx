import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { CartContext } from "../pages/Layout";
import { useContext, useState } from "react";

export default function ProductInfo({ productData }: IProductInfoProps) {
  const navigate = useNavigate();
  const [displayAdded, setDisplayAdded] = useState<boolean>(false);
  const [isHiding, setIsHiding] = useState<boolean>(false);

  const handleGoBack = () => {
    navigate("/Home");
  };

  const { state, dispatch } = useContext(CartContext);

  console.log(state);

  const handleAddToCart = () => {
    dispatch({
      type: "add-item",
      payload: {
        name: productData.name,
        price: productData.price,
        image: productData.image.mobile,
        quantity: state.quantity,
      },
    });

    setDisplayAdded(true);

    setTimeout(() => {
      setIsHiding(true);
    }, 2000);

    setTimeout(() => {
      setDisplayAdded(false);
      setIsHiding(false);
    }, 2200);
  };

  const handleInc = () => {
    dispatch({
      type: "inc",
      payload: {
        name: productData.name,
        price: productData.price,
        image: productData.image.mobile,
        quantity: state.quantity,
      },
    });
  };

  const handleDec = () => {
    dispatch({
      type: "dec",
      payload: {
        name: productData.name,
        price: productData.price,
        image: productData.image.mobile,
        quantity: state.quantity,
      },
    });
  };

  console.log(state);

  return (
    <>
      <GoBack onClick={handleGoBack}>Go Back</GoBack>
      {displayAdded && (
        <AddedText isHiding={isHiding}>Item successfully added</AddedText>
      )}
      <UpperProductSection>
        <ProductImageContainer>
          <source
            media="(min-width:1440px)"
            srcSet={productData.image.desktop}
          />
          <source media="(min-width:769px)" srcSet={productData.image.tablet} />
          <source media="(max-width:768px)" srcSet={productData.image.mobile} />
          <ProductImage src={productData.image.mobile} alt="" />
        </ProductImageContainer>
        <ProductInfoText>
          <TextWrap>
            {productData.new && <NewProductText>NEW PRODUCT</NewProductText>}
            <ProductName>{productData.name.toUpperCase()}</ProductName>
            <ProductDescription>{productData.description}</ProductDescription>
            <Price>$ {productData.price}</Price>
          </TextWrap>
          <AddToCartWrap>
            <QuantityBox>
              <Decrease onClick={handleDec}>-</Decrease>
              <Quantity>{state.quantity}</Quantity>
              <Increase onClick={handleInc}>+</Increase>
            </QuantityBox>
            <AddToCartButton onClick={handleAddToCart}>
              ADD TO CART
            </AddToCartButton>
          </AddToCartWrap>
        </ProductInfoText>
      </UpperProductSection>
      <FeaturesSection>
        <FeaturedTextWrap>
          <FeaturedTitle>FEATURES</FeaturedTitle>
          <FeaturedTextContent>{productData.features}</FeaturedTextContent>
        </FeaturedTextWrap>
        <InTheBoxWrap>
          <FeaturedTitle>IN THE BOX</FeaturedTitle>
          <Includes>
            {productData.includes.map((item, index) => {
              return (
                <IncludesContent key={index}>
                  <IncludesQuantity>{item.quantity}x</IncludesQuantity>
                  {item.item}
                </IncludesContent>
              );
            })}
          </Includes>
        </InTheBoxWrap>
      </FeaturesSection>
    </>
  );
}

const GoBack = styled.button`
  all: unset;
  cursor: pointer;
  color: #00000096;
  font-size: 1.5rem;
`;

const UpperProductSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    gap: 6.9rem;
    margin: auto;
    justify-content: center;
  }
`;

const ProductImageContainer = styled.picture``;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 1rem;

  @media only screen and (min-width: 48rem) {
    width: 28.1rem;
  }

  @media only screen and (min-width: 90rem) {
    width: 54rem;
  }
`;

const ProductInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.1rem;

  @media only screen and (min-width: 48rem) {
    max-width: 34rem;
  }
`;

const NewProductText = styled.h4`
  color: #d87d4a;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.7rem;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const ProductName = styled.h1`
  color: #000;
  font-size: 2.8rem;

  @media only screen and (min-width: 90rem) {
    font-size: 4rem;
  }
`;

const ProductDescription = styled.p`
  color: #000;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

const Price = styled.span`
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
`;

const AddToCartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
`;

const QuantityBox = styled.div`
  width: 12rem;
  padding: 1.5rem 1.7rem;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
`;

export const Quantity = styled.span`
  color: #000;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const Increase = styled.button`
  all: unset;
  font-size: 1.7rem;
  color: #00000067;
  font-weight: 700;
  cursor: pointer;
`;

export const Decrease = styled.button`
  all: unset;
  font-size: 1.7rem;
  color: #00000067;
  font-weight: 700;
  cursor: pointer;
`;

const AddToCartButton = styled.button`
  background-color: #d87d4a;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  padding: 1.5rem 3.5rem;
  width: 55%;

  &:hover {
    background-color: #fbaf85;
    transition: 0.2s;
  }
`;

const FeaturesSection = styled.section`
  margin-top: 8.8rem;
  display: flex;
  flex-direction: column;
  gap: 8.8rem;

  @media only screen and (min-width: 48rem) {
    align-items: center;
  }

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FeaturedTitle = styled.h2`
  color: black;
  font-size: 2.4rem;

  @media only screen and (min-width: 90rem) {
    font-size: 3.2rem;
  }
`;

const FeaturedTextContent = styled.p`
  font-size: 1.5rem;
  color: #000000ca;
  line-height: 2.5rem;

  @media only screen and (min-width: 48rem) {
    max-width: 69rem;
  }
`;

const FeaturedTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const InTheBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    align-items: center;
    gap: 16.5rem;
  }

  @media only screen and (min-width: 90rem) {
    flex-direction: column;
    gap: 3.2rem;
    align-items: start;
  }
`;

const Includes = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const IncludesContent = styled.li`
  all: unset;
  font-size: 1.5rem;
  color: #0000008c;
  display: flex;
  gap: 2.1rem;
`;

const IncludesQuantity = styled.span`
  font-size: 1.5rem;
  color: #d87d4a;
  font-weight: 700;
`;

const SlideOut = keyframes`
  0% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-20%) scale(0.9);
    opacity: 0;
  }
`;

const SlideIn = keyframes`
  0% {
    transform: translateX(-20%) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`;

const AddedText = styled.span<{ isHiding: boolean }>`
  padding: 1.5rem 3rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: #008700;
  position: fixed;
  top: 2rem;
  border: none;
  border-radius: 1rem;
  animation-name: ${({ isHiding }) => (isHiding ? SlideOut : SlideIn)};
  animation-duration: 0.3s;
`;
