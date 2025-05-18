import styled, { keyframes } from "styled-components";
import data from "../data.json";
import Categories from "../components/Categories";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Advertisement from "../components/Advertisement";

export default function Headphones() {
  const { category } = useParams();
  console.log(category);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  console.log(isDesktop);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
      <Container>
        <ProductsSection>
          {data.map((item, index) => {
            return (
              item.category === category?.toLowerCase() && (
                <>
                  <ItemContainer key={index}>
                    {index % 2 === 1 && isDesktop ? (
                      <ProductInformation>
                        {item.new && (
                          <NewProductText>NEW PRODUCT</NewProductText>
                        )}
                        <ProductTitle>{item.name}</ProductTitle>
                        <ProductDescription>
                          {item.description}
                        </ProductDescription>
                        <Link
                          style={{ all: "unset" }}
                          to={`/Home/${item.name}`}>
                          <SeeButton>SEE PRODUCT</SeeButton>
                        </Link>
                      </ProductInformation>
                    ) : (
                      <ProductPicture>
                        <source
                          media="(min-width:1440px)"
                          srcSet={item.categoryImage.desktop}
                        />
                        <source
                          media="(min-width:769px)"
                          srcSet={item.categoryImage.tablet}
                        />
                        <source
                          media="(max-width:768px)"
                          srcSet={item.categoryImage.mobile}
                        />
                        <ProductImg src={item.image.mobile} />
                      </ProductPicture>
                    )}
                    {index % 2 === 1 && isDesktop ? (
                      <ProductPicture>
                        <source
                          media="(min-width:1440px)"
                          srcSet={item.categoryImage.desktop}
                        />
                        <source
                          media="(min-width:769px)"
                          srcSet={item.categoryImage.tablet}
                        />
                        <source
                          media="(max-width:768px)"
                          srcSet={item.categoryImage.mobile}
                        />
                        <ProductImg src={item.image.mobile} />
                      </ProductPicture>
                    ) : (
                      <ProductInformation>
                        {item.new && (
                          <NewProductText>NEW PRODUCT</NewProductText>
                        )}
                        <ProductTitle>{item.name}</ProductTitle>
                        <ProductDescription>
                          {item.description}
                        </ProductDescription>
                        <Link
                          style={{ all: "unset" }}
                          to={`/Home/${item.name}`}>
                          <SeeButton>SEE PRODUCT</SeeButton>
                        </Link>
                      </ProductInformation>
                    )}
                  </ItemContainer>
                </>
              )
            );
          })}
        </ProductsSection>
        <Categories />
        <Advertisement />
      </Container>
    </>
  );
}

const SlideIn = keyframes`
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CategoryTitle = styled.h1`
  color: white;
  font-size: 2.8rem;
  text-align: center;
  padding: 3.2rem 8.4rem;
  background-color: black;
`;

const Container = styled.div`
  padding: 6.4rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 12rem;

  @media only screen and (min-width: 48rem) {
    padding: 12rem 3.9rem;
  }

  @media only screen and (min-width: 90rem) {
    padding: 16.5rem 16rem;
  }
`;

const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12rem;
  animation-name: ${SlideIn};
  animation-duration: 0.4s;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    align-items: center;
    gap: 12.5rem;
  }
`;

const ProductPicture = styled.picture``;

const ProductImg = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

const ProductInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  @media only screen and (min-width: 90rem) {
    align-items: start;
    gap: 3.2rem;
  }
`;

const NewProductText = styled.h4`
  color: #d87d4a;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;

  @media only screen and (min-width: 90rem) {
    text-align: start;
  }
`;

const ProductTitle = styled.h2`
  color: black;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;

  @media only screen and (min-width: 48rem) {
    font-size: 4rem;
  }

  @media only screen and (min-width: 90rem) {
    text-align: start;
  }
`;

const ProductDescription = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #00000090;

  @media only screen and (min-width: 48rem) {
    width: 57.2rem;
  }

  @media only screen and (min-width: 90rem) {
    text-align: start;
  }
`;

const SeeButton = styled.button`
  background-color: #d87d4a;
  color: #fff;
  padding: 1.5rem 3.1rem;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fbaf85;
    transition: 0.2s;
  }
`;
