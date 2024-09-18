"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/components/redux/store";
import Image from "next/image";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/components/redux/cartSlice";
import PriceDisplay from "@/components/priceDisplay";
const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const dispatch = useDispatch();

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <section className=" mt-28 mx-20 flex gap-5">
      {cartItems.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <div className="bg-white flex-1  p-5 ">
          <h1>Cart</h1>
          {cartItems.map((item) => (
            <div key={item.id} className="border-t ">
              <div className="flex items-center justify-between mb-8 pt-8">
                <div className="flex gap-3">
                  <Image src={item.image} alt="" width={120} height={120} />
                  <div>
                    <p>{item.name}</p>
                    <p>Sold by: {item.brand}</p>
                  </div>
                </div>

                <p className="text-3xl font-semibold">
                  <span>
                    <PriceDisplay price={item.price} />
                  </span>
                </p>
              </div>
              <div className="flex justify-between pb-8">
                <div>
                  <button
                    className="border p-2"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="flex gap-2 p-2">
                  <button
                    className=" border p-2 bg-green-600 text"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                  <p className="text-2xl font-semibold space-x-2">
                    {item.quantity}
                  </p>
                  <button
                    className=" border p-2 bg-green-600 text"
                    onClick={() => handleDecrease(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white w-52 h-28">
        <h2>Subtotal: {subtotal.toFixed(2)}</h2>
      </div>
    </section>
  );
};

export default Cart;
