import styled from "styled-components";
import SpeakersImg from "/assets/home/mobile/image-speaker-zx9.png";
import MobileEarphones from "/assets/home/mobile/image-earphones-yx1.jpg";
import TabletEarphones from "/assets/home/tablet/image-earphones-yx1.jpg";
import DesktopEarphones from "/assets/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

export default function TopProducts() {
  return (
    <>
      <ProductsContainer>
        <FirstProduct>
          <Zx9 src={SpeakersImg} />
          <TextContainer>
            <FirstProductName>ZX9 SPEAKER</FirstProductName>
            <Description>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Description>
            <Link style={{ all: "unset" }} to={"/Home/ZX9 Speaker"}>
              <SeeButton>SEE PRODUCT</SeeButton>
            </Link>
          </TextContainer>
        </FirstProduct>
        <SecondProduct>
          <SecondProductName>ZX7 SPEAKER</SecondProductName>
          <Link style={{ all: "unset" }} to={"/Home/ZX7 Speaker"}>
            <SecondSeeButton>SEE PRODUCT</SecondSeeButton>
          </Link>
        </SecondProduct>
        <ThirdProduct>
          <ThirdProductImgContainer>
            <source media="(min-width: 1440px)" srcSet={DesktopEarphones} />
            <source media="(min-width: 769px)" srcSet={TabletEarphones} />
            <source media="(max-width: 768px)" srcSet={MobileEarphones} />
            <ThirdProductImg src={DesktopEarphones} alt="product image" />
          </ThirdProductImgContainer>
          <ThirdProductInfo>
            <SecondProductName>YX1 EARPHONES</SecondProductName>
            <Link style={{ all: "unset" }} to={"/Home/YX1 Wireless Earphones"}>
              <SecondSeeButton>SEE PRODUCT</SecondSeeButton>
            </Link>
          </ThirdProductInfo>
        </ThirdProduct>
      </ProductsContainer>
    </>
  );
}

const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;

  @media only screen and (min-width: 48rem) {
    gap: 3.2rem;
  }

  @media only screen and (min-width: 90rem) {
    gap: 4.8rem;
  }
`;

const FirstProduct = styled.section`
  background-color: #d87d4a;
  border-radius: 1rem;
  padding: 5.5rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    justify-content: space-around;
    align-items: start;
    padding-bottom: unset;
    padding-top: 13.3rem;
  }
`;

const Zx9 = styled.img`
  width: 17.2rem;

  @media only screen and (min-width: 90rem) {
    width: 41rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;

  @media only screen and (min-width: 48rem) {
    max-width: 35rem;
    align-items: center;
  }

  @media only screen and (min-width: 90rem) {
    align-items: unset;
  }
`;

const FirstProductName = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 3.6rem;

  @media only screen and (min-width: 48rem) {
    font-size: 5.6rem;
    width: 26.1rem;
  }

  @media only screen and (min-width: 90rem) {
    text-align: unset;
  }
`;

const Description = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;

  @media only screen and (min-width: 90rem) {
    text-align: unset;
  }
`;

const SeeButton = styled.button`
  width: 16rem;
  background-color: black;
  color: white;
  padding: 1.5rem;
  font-size: 1.3rem;
  margin-top: 2.4rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #4c4c4c;
    transition: 0.2s;
  }
`;

const SecondProduct = styled.section`
  background-image: url(/assets/home/mobile/image-speaker-zx7.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10.1rem 2.4rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3.2rem;

  @media only screen and (min-width: 48rem) {
    background-image: url(/assets/home/tablet/image-speaker-zx7.jpg);
    padding: 10.1rem 6.35rem;
  }

  @media only screen and (min-width: 90rem) {
    background-image: url(/assets/home/desktop/image-speaker-zx7.jpg);
    padding: 10.1rem 9.5rem;
  }
`;

const SecondProductName = styled.h2`
  font-size: 2.8rem;
  color: black;
  letter-spacing: 0.2rem;
`;

const SecondSeeButton = styled.button`
  background-color: transparent;
  padding: 1.5rem 3.1rem;
  color: black;
  border-color: black;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: #fff;
    transition: 0.2s;
  }
`;

const ThirdProduct = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ThirdProductImgContainer = styled.picture`
  border-radius: 1rem;
`;

const ThirdProductImg = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

const ThirdProductInfo = styled.div`
  background-color: #f1f1f1;
  padding: 4.1rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3.2rem;
  border-radius: 1rem;

  @media only screen and (min-width: 48rem) {
    justify-content: center;
    width: 50%;
  }
`;
