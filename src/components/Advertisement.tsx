import styled from "styled-components";
import MobileImg from "/assets/shared/mobile/image-best-gear.jpg";
import TabletImg from "/assets/shared/tablet/image-best-gear.jpg";
import DesktopImg from "/assets/shared/desktop/image-best-gear.jpg";

export default function Advertisement() {
  return (
    <Container>
      <picture>
        <source media="(min-width:1440px" srcSet={DesktopImg} />
        <source media="(min-width:769px)" srcSet={TabletImg} />
        <source media="(max-width:768px)" srcSet={MobileImg} />
        <AdImg src={MobileImg} />
      </picture>
      <TextWrap>
        <AdTitle>
          BRINGING YOU THE <Best>BEST</Best> AUDIO GEAR
        </AdTitle>
        <TextContent>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </TextContent>
      </TextWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media only screen and (min-width: 48rem) {
    gap: 6.3rem;
  }

  @media only screen and (min-width: 90rem) {
    flex-direction: row-reverse;
    margin: auto;
  }
`;

const AdImg = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  @media only screen and (min-width: 48rem) {
    max-width: 57.3rem;
  }
`;

const AdTitle = styled.h2`
  font-size: 2.8rem;
  color: black;
  text-align: center;
  letter-spacing: 2.5px;

  @media only screen and (min-width: 48rem) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 90rem) {
    text-align: left;
  }
`;

const Best = styled.span`
  color: #d87d4a;
`;

const TextContent = styled.p`
  font-size: 1.5rem;
  color: #0000009f;
  text-align: center;
  line-height: 25px;

  @media only screen and (min-width: 90rem) {
    text-align: left;
  }
`;
