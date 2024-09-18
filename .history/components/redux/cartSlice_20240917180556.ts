import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductType {
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

interface CartItem extends ProductType {
  quantity: number;
}
interface CartState {
  cart: CartItem[];
}

const getInitialCartState = (): CartState => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return { cart: JSON.parse(storedCart) };
    }
  }
  return { cart: [] };
};

const initialState: CartState = getInitialCartState();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductType>) {
      const product = action.payload;

      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        if (existingProduct.quantity < existingProduct.itemsLeft) {
          existingProduct.quantity += 1;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    clearCart(state) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
