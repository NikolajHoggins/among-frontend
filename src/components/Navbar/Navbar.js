import { Link } from "@reach/router";
import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/profile">
        <img src={require("../../assets/img/user.svg")} alt="" />
      </Link>

      <Link to="/">
        <img src={require("../../assets/img/swipe.svg")} alt="" />
      </Link>

      <Link to="/matches">
        <img
          src={require("../../assets/img/heart_nav.svg")}
          height="36px"
          alt=""
        />
      </Link>
    </div>
  );
}
