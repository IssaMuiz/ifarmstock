import { ProductType } from "../types";
import { ADD_T0_CART, REMOVE_FROM_CART } from "@/components/redux/cartConstant";

export const addToCart =
  (product: ProductType, quantity: number) => (dispatch: any) => {
    dispatch({
      type: ADD_T0_CART,
      payload: {
        product,
        quantity,
      },
    });
  };

export const removeFromCart = (productId: number) => (dispatch: any) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      productId,
    },
  });
};
