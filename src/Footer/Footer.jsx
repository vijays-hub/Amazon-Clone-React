import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Footer.css";

function Footer() {
  const history = useHistory();
  const [{ user }] = useStateValue();
  return (
    <div className="footer">
      {user ? (
        ""
      ) : (
        <div className="footer__signIn">
          <div className="footer_signInOptions">
            <p>See personalized recommendations</p>
            <button onClick={(e) => history.push("/login")}>Sign in</button>
            <br />
            <span>New customer? </span>
            <span
              style={{ color: "blue", opacity: "0.7", cursor: "pointer" }}
              onClick={(e) => history.push("/login")}
            >
              Start here.
            </span>
          </div>
        </div>
      )}
      <div className="footer__topButton">
        <p onClick={(e) => window.scrollTo(0, 0)}>Back to top</p>
      </div>
      <div className="footer__options">
        <div className="footer__optionsOne">
          <h4>Get to Know Us</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
        </div>
        <div className="footer__optionsTwo">
          <h4> Connect with Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer__optionsThree">
          <h4> Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="footer__optionsFour">
          <h4> Let Us Help You</h4>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
