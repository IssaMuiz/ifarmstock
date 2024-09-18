"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/components/redux/store";
import Image from "next/image";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/components/redux/cartSlice";

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
    <section className="bg-white">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <div>
                <Image src={item.image} alt="" width={30} height={30} />
              </div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <button onClick={() => handleIncrease(item.id)}>+</button>
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      <div>
        <h2>Subtotal: {subtotal.toFixed(2)}</h2>
      </div>
    </section>
  );
};

export default Cart;
