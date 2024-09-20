export interface ProductType {
  id: number;
  image: string;
  name: string;
  price: number;
  weight: number;
  rating: number;
  itemsLeft: number;
  isBestSeller: boolean;
  dateAdded: string;
  brand: string;
}

console.log(process.env.MONGODB_URL);
