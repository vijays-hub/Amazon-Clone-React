import React from "react";
import "../Check-out/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../Reducer";
import { useHistory } from "react-router-dom";

export default function Subtotal() {
  const [{ basket }] = useStateValue();

  const history = useHistory()

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
      <button onClick={e => history.push('/payment')}>Proceed to Checkout!</button>
    </div>
  );
}
