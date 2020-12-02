import React from "react";
import "./Home.css";
import Product from "./Product";
import { ToastProvider } from 'react-toast-notifications'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/Oct/GW/DesktopHero_1500x600._CB402740210_.jpg"
          alt=""
        />
        <ToastProvider>
          <div className="home__row">
            <Product
              id="12321341"
              title="Akai Professional Force – Standalone Music Production/DJ Performance System"
              price={144595}
              image="https://images-na.ssl-images-amazon.com/images/I/814TGSg5DAL._SL1500_.jpg"
              rating={3}
            />
            <Product
              id="49538094"
              title="Stryker Pre Owned Laparoscopy Trolly 1188 HD Camera Full Set"
              price={219999}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/31Ol38EKjpL.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="MSI Prestige 14 Intel Core i5-10210U 10th Gen 14-inch Laptop"
              price={89990.55}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71uHZxLWZ-L._SL1500_.jpg"
            />
            <Product
              id="23445930"
              title="Samsung 163 cm (65 inches) Q Series QA65Q8CNAK 4K LED Smart TV (Black)"
              price={158999.00}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/91i6SX47ClL._SL1500_.jpg"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Grey (2nd Generation)"
              price={80900.95}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
              price={153900.00}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355.jpg"
            />
          </div>
        </ToastProvider>
      </div>
    </div>
  );
}

export default Home;
