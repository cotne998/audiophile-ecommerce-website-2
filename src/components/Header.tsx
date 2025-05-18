import styled, { keyframes } from "styled-components";
import HamburgerIcon from "/assets/shared/tablet/icon-hamburger.svg";
import LogoIcon from "/assets/shared/desktop/logo.svg";
import CartIcon from "/assets/shared/desktop/icon-cart.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../pages/Layout";
import Categories from "./Categories";
import { SlideIn } from "./Categories";
import CartComponent from "./CartComponent";
import { useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();

  const { displayMenu, handleMenuClick, displayCart, handleCartClick } =
    useContext(MainContext);

  useEffect(() => {
    if (displayMenu || displayCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [displayMenu, displayCart]);

  return (
    <HeaderContainer>
      <header>
        <Hamburger onClick={handleMenuClick} src={HamburgerIcon} />
        <Logo onClick={() => navigate("/Home")} src={LogoIcon} />
        <DesktopNav>
          <DesktopUl>
            <DesktopLi>
              <Link style={{ all: "unset" }} to={"Home"}>
                HOME
              </Link>
            </DesktopLi>
            <DesktopLi>
              <Link style={{ all: "unset" }} to={"Headphones"}>
                HEADPHONES
              </Link>
            </DesktopLi>
            <DesktopLi>
              <Link style={{ all: "unset" }} to={"Speakers"}>
                SPEAKERS
              </Link>
            </DesktopLi>
            <DesktopLi>
              <Link style={{ all: "unset" }} to={"Earphones"}>
                EARPHONES
              </Link>
            </DesktopLi>
          </DesktopUl>
        </DesktopNav>
        <Cart onClick={handleCartClick} src={CartIcon} />
      </header>
      {displayMenu && (
        <>
          <Overlay onClick={handleMenuClick} />
          <CategoriesContainer>
            <Categories />{" "}
          </CategoriesContainer>
        </>
      )}
      {displayCart && (
        <>
          <Overlay onClick={handleCartClick} />
          <CartComponent />
        </>
      )}
    </HeaderContainer>
  );
}

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  animation-name: ${FadeIn};
  animation-duration: 0.3s;
`;

const HeaderContainer = styled.div`
  position: relative;
`;

const CategoriesContainer = styled.div`
  position: fixed;
  top: 0;
  top: 7rem;
  width: 100%;
  background-color: white;
  padding: 3.2rem 2.4rem 3.5rem;
  z-index: 20;
  animation-name: ${SlideIn};
  animation-duration: 0.3s;
  max-height: calc(100vh - 7rem);
  overflow-y: auto;

  @media only screen and (min-width: 48rem) {
    padding: 5.6rem 4rem 6.7rem;
  }
`;

const Hamburger = styled.img`
  cursor: pointer;
  @media only screen and (min-width: 90rem) {
    display: none;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
`;

const Cart = styled.img`
  cursor: pointer;
  @media only screen and (min-width: 48rem) {
    position: absolute;
    top: 3.4rem;
    right: 4rem;
    transform: translateX(-50%);
  }

  @media only screen and (min-width: 90rem) {
    position: unset;
  }
`;

const DesktopNav = styled.nav`
  display: none;

  @media only screen and (min-width: 90rem) {
    display: flex;
  }
`;

const DesktopUl = styled.ul`
  all: unset;
  display: flex;
  gap: 3.4rem;
`;

const DesktopLi = styled.li`
  all: unset;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    color: #d87d4a;
    transition: 0.2s;
  }
`;
