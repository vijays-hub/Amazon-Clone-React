import React, { useEffect } from "react";
import "../Check-out/Checkout.css";
import Subtotal from "../Check-out/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { ToastProvider } from "react-toast-notifications";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="checkout">
      {basket?.length >= 1 ? (
        <>
          <div className="checkout__left">
            <img
              className="checkout__ad"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt=""
            />

            <div>
              <h3>Hey, {user ? user.email : "Guest"}!</h3>
              <h2 className="checkout__title">Your Shopping Basket</h2>
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    image={item.image}
                    // Helps to hide the remove button wherever necessary
                    hideButton={false}
                  ></CheckoutProduct>
                );
              })}
            </div>
          </div>
          <div className="checkout__right">
            <ToastProvider>
              <Subtotal></Subtotal>
            </ToastProvider>
          </div>{" "}
        </>
      ) : (
        <div className="checkout__emptyCart">
          <h4>"Cart is empty. Try adding some items to cart!"</h4>
        </div>
      )}
    </div>
  );
}

export default Checkout;
