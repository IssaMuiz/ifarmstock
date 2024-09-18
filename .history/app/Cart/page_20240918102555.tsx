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
        <div className="bg-white flex-1  p-5 rounded-md">
          <h1>Cart</h1>
          {cartItems.map((item) => (
            <div key={item.id} className="border-t ">
              <div className="flex items-center justify-between mb-8 pt-8">
                <div className="flex gap-3">
                  <Image src={item.image} alt="" width={150} height={150} />
                  <div className="text-lg">
                    <p>{item.name}</p>
                    <p>
                      {" "}
                      <span className="text-gray-600">Sold by:</span>{" "}
                      {item.brand}
                    </p>
                  </div>
                </div>

                <p className="text-2xl font-medium">
                  <span>
                    <PriceDisplay price={item.price} />
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between pb-8">
                <div>
                  <button
                    className="py-1 bg-green-600 px-4 text-2xl text hover:bg-green-700 rounded-md"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="flex gap-3 p-2 items-center">
                  <button
                    className="py-1 bg-green-600 px-4 text-2xl text hover:bg-green-700 rounded-md"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                  <p className="text-xl font-semibold space-x-2">
                    {item.quantity}
                  </p>
                  <button
                    className="py-1 bg-green-600 px-4 text-2xl text hover:bg-green-700 rounded-md"
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

      <div className="bg-white w-72 h-40 rounded-md p-5">
        <div>
          <h2 className="text-xl border-b">ORDER SUMMARY</h2>
        </div>
        <div className="flex items-center justify-between mt-10">
          <p className="text-gray-600 text-xl ">Subtotal:</p>
          <span className="text-end text-2xl font-medium">
            <PriceDisplay price={subtotal} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Cart;
