import React from "react";
import "../HeaderComponent/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from '../firebase/index'

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt="amazon_logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* to={!user && '/login'} --> If there is no user, then only redirect to Login Page! */}
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}!</span>
            <span className="header__optionTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Retuns</span>
          <span className="header__optionTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {/* {basket.length} */}
              {/* Optional Chaining [using ' ? '] to avoid any error if undefined */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
