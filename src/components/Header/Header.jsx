import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a href="/order">Order</a>
        <a href="/shop">Shop</a>
        <a href="/order review">Order review</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
