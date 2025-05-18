import { useParams } from "react-router-dom";
import data from "../data.json";
import ProductInfo from "../components/ProductInfo";
import styled from "styled-components";
import Gallery from "../components/Gallery";
import Others from "../components/Others";
import Categories from "../components/Categories";
import Advertisement from "../components/Advertisement";

export default function Product() {
  const { product } = useParams<{ product: string | undefined }>();

  const productData = data.find((item) =>
    product ? item.name.toLowerCase().includes(product.toLowerCase()) : false
  );

  if (!productData) {
    return <h1>Product is no longer available</h1>;
  }

  return (
    <>
      <ProductContaner>
        <ProductInfo product={product} productData={productData} />
        <Gallery product={product} productData={productData} />
        <Others product={product} productData={productData} />
        <Categories />
        <Advertisement />
      </ProductContaner>
    </>
  );
}

const ProductContaner = styled.div`
  padding: 1.6rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 12rem;

  @media only screen and (min-width: 48rem) {
    padding: 16.5rem 7.9rem;
    gap: 16rem;
  }
`;
