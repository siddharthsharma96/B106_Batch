import { useOutletContext } from "react-router-dom";
import "./../Style/cart.css";
import EmptyCart from "../Components/EmptyCart";
import CartItems from "../Components/CartItems";
import { useEffect, useState } from "react";
const Cart = () => {
  const { cartItems, addItem, removeItem } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    cartItems.forEach((item) => {
      price += item.quantity * item.card.info.defaultPrice;
    });
    setTotalPrice(price);
  }, [cartItems]);
  console.log(totalPrice / 100);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <EmptyCart></EmptyCart>
      ) : (
        <CartItems
          cartItems={cartItems}
          addItem={addItem}
          removeItem={removeItem}
          totalPrice={totalPrice}
        ></CartItems>
      )}
    </div>
  );
};

export default Cart;
