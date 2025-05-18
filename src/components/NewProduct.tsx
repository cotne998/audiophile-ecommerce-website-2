import styled, { keyframes } from "styled-components";
import HeadphonesImg from "/assets/home/mobile/image-header.jpg";
import HeadphonesTablet from "/assets/home/tablet/image-header.jpg";
import HeadphonesDesktop from "/assets/home/desktop/image-hero.jpg";
import { Link } from "react-router-dom";

export default function NewProduct() {
  return (
    <>
      <NewProductSection>
        <TextSection>
          <NewProductText>NEW PRODUCT</NewProductText>
          <ProductTitle>XX99 Mark II Headphones</ProductTitle>
          <TextContent>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </TextContent>
          <Link style={{ all: "unset" }} to={"/Home/XX99 Mark II Headphones"}>
            <SeeButton>SEE PRODUCT</SeeButton>
          </Link>
        </TextSection>
      </NewProductSection>
    </>
  );
}

const SlideIn = keyframes`
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const NewProductSection = styled.section`
  background-image: url(${HeadphonesImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 10rem 2.5rem 11.2rem;
  animation-name: ${SlideIn};
  animation-duration: 0.4s;

  @media only screen and (min-width: 48rem) {
    background-image: url(${HeadphonesTablet});
    padding: 12.6rem 19.4rem 16.7rem;
  }

  @media only screen and (min-width: 90rem) {
    background-image: url(${HeadphonesDesktop});
    justify-content: unset;
  }
`;

const TextSection = styled.div`
  width: 32.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  animation-name: ${SlideIn};
  animation-duration: 0.8s;

  @media only screen and (min-width: 48rem) {
    width: 38rem;
  }

  @media only screen and (min-width: 90rem) {
    text-align: left;
    align-items: start;
    width: 40rem;
  }
`;

const NewProductText = styled.span`
  color: #ffffff85;
  font-size: 1.4rem;
  letter-spacing: 0.7rem;
`;

const ProductTitle = styled.h2`
  font-size: 3.6rem;
  color: #fff;

  @media only screen and (min-width: 48rem) {
    font-size: 5.6rem;
    line-height: 5.7rem;
  }
`;

const TextContent = styled.p`
  color: #ffffffc9;
  font-size: 1.5rem;
  line-height: 2.6rem;
`;

const SeeButton = styled.button`
  width: 16rem;
  font-size: 1.3rem;
  color: #fff;
  padding: 1.5rem 3rem;
  border: none;
  background-color: #d87d4a;
  cursor: pointer;
  animation-name: ${SlideIn};
  animation-duration: 1s;

  @media only screen and (min-width: 48rem) {
    margin-top: 2rem;
  }
`;
