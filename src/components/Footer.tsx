import styled from "styled-components";
import { Logo } from "./Header";
import LogoIcon from "/assets/shared/desktop/logo.svg";
import FacebookIcon from "/assets/icon-facebook.svg";
import TwitterIcon from "/assets/icon-twitter.svg";
import InstagramIcon from "/assets/icon-instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <NavWrap>
          <Logo src={LogoIcon} />
          <FooterNav>
            <FooterUl>
              <FooterLink to={"/Home"}>
                <FooterLi>HOME</FooterLi>
              </FooterLink>
              <FooterLink to={"/Headphones"}>
                <FooterLi>HEADPHONES</FooterLi>
              </FooterLink>
              <FooterLink to={"/Speakers"}>
                <FooterLi>SPEAKERS</FooterLi>
              </FooterLink>
              <FooterLink to={"Earphones"}>
                <FooterLi>EARPHONES</FooterLi>
              </FooterLink>
            </FooterUl>
          </FooterNav>
        </NavWrap>
        <TextContent>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </TextContent>
        <CopyrightWrap>
          <CopyrightText>Copyright 2021. All Rights Reserved</CopyrightText>
          <IconsDiv>
            <Icon src={FacebookIcon} />
            <Icon src={TwitterIcon} />
            <Icon src={InstagramIcon} />
          </IconsDiv>
        </CopyrightWrap>
      </footer>
    </>
  );
}

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  @media only screen and (min-width: 48rem) {
    align-items: start;
  }

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterNav = styled.nav``;

const FooterUl = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 1.9rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    gap: 3.4rem;
  }
`;

const FooterLi = styled.li`
  all: unset;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;

  &:hover {
    color: #d87d4a;
    transition: 0.2s;
  }
`;

const TextContent = styled.p`
  text-align: center;
  color: #ffffff88;
  font-size: 1.5rem;
  line-height: 27px;

  @media only screen and (min-width: 48rem) {
    text-align: left;
  }

  @media only screen and (min-width: 90rem) {
    max-width: 54rem;
  }
`;

const CopyrightWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: center;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
    margin-top: 4rem;
  }
`;

const CopyrightText = styled.h5`
  text-align: center;
  font-size: 1.5rem;
  color: #ffffff88;
`;

const IconsDiv = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const Icon = styled.img`
  cursor: pointer;
`;

const FooterLink = styled(Link)`
  all: unset;
  cursor: pointer;
  text-align: center;
`;
