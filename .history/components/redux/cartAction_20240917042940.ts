import { ProductType } from "../types";
import { ADD_T0_CART, REMOVE_FROM_CART } from "@/components/redux/cartConstant";

export const addToCart =
  (product: ProductType, quantity: number) => (dispatch: any) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
        quantity,
      },
    });
  };

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_TO_CART",
    payload: productId,
  };
};
