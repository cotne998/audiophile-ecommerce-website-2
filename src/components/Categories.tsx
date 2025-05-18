import styled from "styled-components";
import HeadphonesImg from "/assets/home/mobile/image-removebg-preview(41).png";
import EarphonesImg from "/assets/home/mobile/image-removebg-preview(42).png";
import SpeakersImg from "/assets/home/mobile/image-speaker-zx9.png";
import ShadowImg from "/assets/Oval.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../pages/Layout";
import { keyframes } from "styled-components";

export default function Categories() {
  const { setDisplayMenu } = useContext(MainContext);

  const handleClick = () => {
    setDisplayMenu(false);

    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <CategoriesSection>
        <Category>
          <ProductImg src={HeadphonesImg} />
          <TextWrap>
            <ProductName>HEADPHONES</ProductName>
            <Shadow src={ShadowImg} />
            <Link
              onClick={handleClick}
              style={{ all: "unset" }}
              to={"/Headphones"}>
              <ShopRoute>SHOP</ShopRoute>
            </Link>
          </TextWrap>
        </Category>
        <Category>
          <ProductImg src={SpeakersImg} />
          <Shadow src={ShadowImg} />
          <TextWrap>
            <ProductName>SPEAKERS</ProductName>
            <Link
              onClick={handleClick}
              style={{ all: "unset" }}
              to={"/Speakers"}>
              <ShopRoute>SHOP</ShopRoute>
            </Link>
          </TextWrap>
        </Category>
        <Category>
          <ProductImg src={EarphonesImg} />
          <Shadow src={ShadowImg} />
          <TextWrap>
            <ProductName>EARPHONES</ProductName>
            <Link
              onClick={handleClick}
              style={{ all: "unset" }}
              to={"/Earphones"}>
              <ShopRoute>SHOP</ShopRoute>
            </Link>
          </TextWrap>
        </Category>
      </CategoriesSection>
    </>
  );
}

export const SlideIn = keyframes`
  0% {
    transform: translateY(-20%);
    opacity: 0;
  } 100% {
    transform: translateY(0);
    opacity: 1;}
  `;

const CategoriesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6.8rem;
  margin-top: 9.2rem;
  animation-name: ${SlideIn};
  animation-duration: 0.7s;
  width: 100%;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
  }
`;

const Category = styled.div`
  position: relative;
  padding: 8.8rem 5.4rem 2.2rem;
  background-color: #f1f1f1;
  width: 100%;
  border-radius: 1rem;
`;

const ProductImg = styled.img`
  position: absolute;
  top: -5.2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 8rem;
`;

const Shadow = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.1rem;
`;

const ProductName = styled.h4`
  color: #000000;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  @media only screen and (min-width: 90rem) {
    font-size: 1.8rem;
  }
`;

const ShopRoute = styled.span`
  color: #000000b0;
  display: block;
  text-align: center;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    color: #d87d4a;
    transition: 0.2s;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;
