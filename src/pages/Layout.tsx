import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createContext, useState, useEffect, useReducer } from "react";
import { cartReducer, initialState } from "../cartReducer";

export const MainContext = createContext<IContext>({
  displayMenu: false,
  setDisplayMenu: () => {},
  handleMenuClick: () => {},
  displayCart: false,
  setDisplayCart: () => {},
  handleCartClick: () => {},
  cartIsEmpty: false,
});

export const CartContext = createContext<ICartContext>({
  state: initialState,
  dispatch: () => {},
});

export default function Layout() {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [displayCart, setDisplayCart] = useState<boolean>(false);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    navigate("/Home");
  }, []);

  const handleMenuClick = () => {
    setDisplayMenu(!displayMenu);
  };

  const handleCartClick = () => {
    setDisplayCart(!displayCart);
  };

  return (
    <>
      <MainContext.Provider
        value={{
          displayMenu,
          setDisplayMenu,
          handleMenuClick,
          displayCart,
          setDisplayCart,
          handleCartClick,
          cartIsEmpty: state.cartItems.length === 0,
        }}>
        <CartContext.Provider value={{ state, dispatch }}>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </CartContext.Provider>
      </MainContext.Provider>
    </>
  );
}
