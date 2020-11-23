import React from "react";
import "../Check-out/Checkout.css";
import Subtotal from "../Check-out/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hey, {user?.email}!</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                image={item.image}
              ></CheckoutProduct>
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
