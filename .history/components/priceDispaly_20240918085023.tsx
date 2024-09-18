interface PriceDisplayProps {
  price: number;
}
const priceDisplay: React.FC<PriceDisplayProps> = ({ price }) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return;
  <span>{formatPrice(price)}</span>;
};

export default priceDisplay;
