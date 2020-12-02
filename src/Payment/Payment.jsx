import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "../Check-out/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer";
import axios from "../axios";
import { db } from "../firebase/index";
import PaymentLoader from "./PaymentLoader";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const [clientSecret, setClientSecret] = useState();
  const styles = {
    background: "#ffc940",
    borderRadius: "5px",
    width: "100px",
    height: "35px",
    border: "1px solid",
    fontWeight: "bolder",
    marginTop: "10px",
    borderColor: "#a88734 #9c7e31 #846a29",
    color: "#111",
  };

  // Gets called every time there is a change in the basket items [coz price will also change, so we need client sceret everytime].
  useEffect(() => {
    window.scrollTo(0, 0);

    // Generate the Stripe Client Secret
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("Recieved Client Secret is : ", clientSecret);

  // Stripe Payment Hooks
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // Destructed response and got paymentIntent which tells the payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(false);
        setProcessing(false);

        // Empty the basket
        dispatch({
          type: "EMPTY_BASKET",
        });

        // To avoid coming back to payments page again!
        history.replace("/orders");
      });
    console.log(payload);
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      {user ? (
        basket?.length >= 1 ? (
          <>
            {" "}
            <div className="payment__container">
              <h1>
                {
                  <Link to="/checkout">
                    {" "}
                    <span style={{ color: "#111" }}>Checkout</span> (
                    {basket?.length} items)
                  </Link>
                }
              </h1>
              <div className="payment__section">
                <div className="payment__title">
                  <h3>Delivery address</h3>
                </div>
                <div className="payment__address">
                  <p>{user?.email}</p>
                  <p>Amazon Developement Center, Aquilla,</p>
                  <p>Ferns City, Doddanekkundi</p>
                  <p>Bangalore - 560048</p>
                </div>
              </div>
              <div className="payment__section">
                <div className="payment__title">
                  <h3>Review Items and delivery</h3>
                </div>
                <div className="payment__items">
                  {/* Instead of making new component, lets re-use the CHECKOUTPRODUCT component*/}
                  {basket?.map((item) => {
                    return (
                      <CheckoutProduct
                        key={item.id}
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
              <div className="payment__section">
                <div className="payment__title">
                  <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                  <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}></CardElement>
                    <span>{processing ? <PaymentLoader /> : ""}</span>
                    <span style={{ color: "red" }}>
                      {error && <div>{error}</div>}
                    </span>
                    <div className="payment__priceContainer">
                      <CurrencyFormat
                        renderText={(value) => (
                          <>
                            <h3>Order Total : {value} Rs/-</h3>
                          </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"INR "}
                      />
                      <button disabled={processing || disabled || succeeded}>
                        <span>
                          {processing ? <p>Please wait</p> : "Buy Now"}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="payment__warning">
            <h2>Your Cart is Empty. Add items to your cart before payment!</h2>
          </div>
        )
      ) : (
        <div className="payment__warning">
          <h2>Sign in before proceeding to payment</h2>
          <br />
          <button style={styles} onClick={(e) => history.push("/login")}>
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}

export default Payment;
