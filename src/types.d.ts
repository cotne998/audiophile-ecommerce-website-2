interface IContext {
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenuClick: () => void;
  displayCart: boolean;
  setDisplayCart: React.Dispatch<React.SetStateAction<boolean>>;
  handleCartClick: () => void;
}

interface IInitialState {
  cartItems: ICartItem[];
  quantity: number;
  totalPrice?: number; // დაამატე `totalPrice` როგორც არჩევითი ველი
}

interface ICartItem {
  quantity: number;
  name: string;
  price: number;
  image: string;
}

interface IProductData {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others?:
    | {
        slug: string;
        name: string;
        image: {
          mobile: string;
          tablet: string;
          desktop: string;
        };
      }[]
    | undefined;
}

interface IProductInfoProps {
  product: string | undefined;
  productData: IProductData;
}

type CartAction =
  | { type: "add-item"; payload: ICartItem }
  | { type: "remove-item"; payload: ICartItem }
  | { type: "clear-cart" }
  | { type: "inc"; payload: ICartItem }
  | { type: "dec"; payload: ICartItem }
  | { type: "cart-inc"; payload: { name: string; quantity: number } }
  | {
      type: "cart-dec";
      payload: { name: string; quantity: number };
    }
  | { type: "total-price" };

interface ICartContext {
  state: IInitialState;
  dispatch: React.Dispatch<CartAction>;
}
