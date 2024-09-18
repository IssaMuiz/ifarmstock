interface PriceDisplayProps {
  price: number;
}
const priceDispaly: React.FC<PriceDisplayProps> = ({ price }) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);
};

export default priceDispaly;
