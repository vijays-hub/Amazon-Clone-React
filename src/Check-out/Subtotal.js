import React, { useEffect } from "react";
import "../Check-out/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../Reducer";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

export default function Subtotal() {
  const [{ basket }] = useStateValue();

  const { addToast } = useToasts();

  const content = `Checkout Limit: 999999 Rs At Once! \n Remove Some items from the cart! `;

  const history = useHistory();

  useEffect(() => {
    if (getBasketTotal(basket) >= 999999) {
      addToast(content, {
        appearance: "warning",
        autoDismiss: true,
        autoDismissTimeout: "5000",
      });
    }
  }, [getBasketTotal(basket)]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value} Rs/-</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Contains a Gift!
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"INR "}
      />
      <button
        onClick={(e) => history.push("/payment")}
        disabled={getBasketTotal(basket) >= 999999}
      >
        Proceed to Checkout!
      </button>
      {getBasketTotal(basket) >= 999999 ? (
        <span style={{ color: "red" }}>
          Checkout Limit : 999999 Rs. at once!
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
