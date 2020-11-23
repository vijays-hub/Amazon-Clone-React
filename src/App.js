import "./App.css";
import Header from "./HeaderComponent/Header";
import Home from "./Home";
import Checkout from "./Check-out/Checkout";
import Login from "./Login-SignUp/Login";
import SignUp from "./Login-SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase/index";
import Payment from "./Payment/Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HqZPuJYklAWW39crWO9KvR2qvgK0BGKtEGsy4wrShjM0d60xIUa3JLmpxzzqMgYzD0QoSc1GDHFOW0mGgm928eT00EhArNglr"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket -->", basket);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is [was] logged in!

        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // User is logged out!
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          {/* Default Path to be at the bottom always! */}
          <Route path="/">
            <Header></Header>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
