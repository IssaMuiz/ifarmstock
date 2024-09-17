import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductCart {
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
  quantity: number;
}

interface CartState {
  items: ProductCart[];
  totalQuatity: number;
}

const initialState: CartState = {
  items: [],
  totalQuatity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductCart>) {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.totalQuatity += action.payload.quantity;
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingProduct = state.items.find((item) => item.id === id);

      if (existingProduct) {
        state.totalQuatity -= existingProduct.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuatity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
