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

export interface CartItem {
  product: ProductType;
  quatity: number;
}

export interface CartState {
  cartItems: CartItem[];
}
