export const initialState: IInitialState = {
  cartItems: [],
  quantity: 1,
};

export const cartReducer = (
  state: IInitialState,
  action: CartAction
): IInitialState => {
  switch (action.type) {
    case "add-item": {
      const existingItem = state.cartItems.find(
        (item) => item.name === action.payload.name
      );

      const updatedCart = existingItem
        ? state.cartItems.map((item) =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        : [...state.cartItems, { ...action.payload, quantity: state.quantity }];

      return {
        ...state,
        cartItems: updatedCart,
        quantity: 1,
      };
    }

    case "remove-item": {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.name !== action.payload.name
        ),
      };
    }

    case "inc": {
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    }

    case "dec": {
      return {
        ...state,
        quantity: Math.max(1, state.quantity - 1),
      };
    }

    case "clear-cart": {
      return {
        ...state,
        cartItems: [],
        quantity: 1,
      };
    }

    case "cart-inc": {
      const updatedCart = state.cartItems.map((item) =>
        item.name === action.payload.name
          ? {
              ...item,
              quantity: item.quantity + (action.payload.quantity || 1),
            }
          : item
      );

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case "cart-dec": {
      const updatedCart = state.cartItems
        .map((item) =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity - action.payload.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case "total-price": {
      let sum = 0;

      state.cartItems.map((item) => {
        sum += item.price * item.quantity;
      });

      return {
        ...state,
        totalPrice: sum,
      };
    }

    default:
      return state;
  }
};
