import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductType {
  id: number;
  image: string;
  name: string;
  Price: number;
  weight: number;
  rating: number;
  itemsLeft: number;
  isBestSeller: boolean;
  dateAdded: string;
  brand: string;
}

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
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
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
