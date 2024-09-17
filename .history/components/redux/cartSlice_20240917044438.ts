import { CartState, CartItem } from "../types";
import { ADD_T0_CART, REMOVE_FROM_CART } from "@/components/redux/cartConstant";

const initialState: CartState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case ADD_T0_CART:
      const newItem: CartItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product.id === newItem.product.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === existingItem.product.id ? newItem : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
