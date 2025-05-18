import Advertisement from "../components/Advertisement";
import Categories from "../components/Categories";
import NewProduct from "../components/NewProduct";
import TopProducts from "../components/TopProducts";

export default function Home() {
  return (
    <>
      <NewProduct />
      <div className="products-main">
        <Categories />
        <TopProducts />
        <Advertisement />
      </div>
    </>
  );
}
