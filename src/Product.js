import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// Breaking the props object and getting only certain properties from it.
function Product({ id, title, image, price, rating }) {
  // {basket} has all the items in it!

  const [{ basket }, dispatch] = useStateValue();

  console.log("Basket Items");
  console.log(basket);

  const addToCart = () => {
    console.log("Add to Cart!");
    // Dispatch the item into Store (data layer)
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>
            {
              /* {Array(rating)
            .fill()
            .map((_, i) => {
              return <p> ⭐ </p>;
            })} */
              "⭐".repeat(rating)
            }
          </p>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
