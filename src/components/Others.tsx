import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Others({ productData }: IProductInfoProps) {
  if (!productData.others || productData.others.length === 0) {
    return <h1>No suggested items</h1>;
  }

  const handleSeeButton = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <OthersTitle>YOU MAY ALSO LIKE</OthersTitle>
      <OthersSection>
        {productData?.others.map((item, index) => {
          return (
            <OthersItem key={index}>
              <OthersPicture>
                <source
                  media="(min-width:1440px)"
                  srcSet={item.image.desktop}
                />
                <source media="(min-width:769px)" srcSet={item.image.tablet} />
                <source media="(max-width:768px)" srcSet={item.image.mobile} />
                <OthersImg src={item.image.mobile} />
              </OthersPicture>
              <ItemName>{item.name.toUpperCase()}</ItemName>
              <Link onClick={handleSeeButton} to={`/Home/${item.name}`}>
                <SeeButton>SEE PRODUCT</SeeButton>
              </Link>
            </OthersItem>
          );
        })}
      </OthersSection>
    </>
  );
}

const OthersTitle = styled.h2`
  color: black;
  font-size: 2.4rem;
  text-align: center;
`;

const OthersSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
  }
`;

const OthersItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

const OthersPicture = styled.picture``;

const OthersImg = styled.img`
  width: 100%;
`;

const ItemName = styled.h2`
  text-align: center;
  color: black;
  font-size: 2.4rem;
`;

const SeeButton = styled.button`
  border: none;
  background-color: #d87d4a;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1.5rem 3.1rem;
  cursor: pointer;

  &:hover {
    background-color: #fbaf85;
    transition: 0.2s;
  }
`;
