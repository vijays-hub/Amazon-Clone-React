//  .jsx === .js

import "../Check-out/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import { Animated } from "react-animated-css";

function CheckoutProduct({ id, image, price, title, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket ->", basket);
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Animated animationIn="zoomIn" isVisible={true} animationInDuration={2000}>
      <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__img" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <br />
          <p className="checkoutProduct__price">
            <small>INR </small>
            <strong>{price} Rs/-</strong>
          </p>

          <div>
            <p>{" ⭐ ".repeat(rating)}</p>
          </div>
          {!hideButton && (
            <button onClick={removeFromCart}>Remove from Cart</button>
          )}
        </div>
      </div>
    </Animated>
  );
}

export default CheckoutProduct;
