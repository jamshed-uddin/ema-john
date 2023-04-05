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
        <a href="/">HOME</a>
        <a href="/ ">SHOP</a>
        <a href="/order-review">ORDER REVIEW</a>
        <a href="/login">LOGIN</a>
      </div>
    </div>
  );
};

export default Header;
