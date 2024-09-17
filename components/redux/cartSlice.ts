import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../ProductType";

export interface CartItem extends ProductType {
  quantity: number;
}
interface CartState {
  items: CartItem[];
  totalQuantity: number;
}
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductType>) {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      console.log(product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalQuantity += 1;
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingProduct = state.items.find((item) => item.id === id);

      if (existingProduct) {
        state.totalQuantity -= existingProduct.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
