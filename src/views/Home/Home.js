import React from "react";
import { Link } from "@reach/router";
import "./Home.scss";
import CardStack from "../../components/CardStack";
export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1 className="title">Love among us</h1>
        <h2 className="subtitle">
          Who's the imposter that will stab <span>you</span> in the heart?
        </h2>
      </div>
      <br />
      <div className="card-container">
        <CardStack />
        <div className="buttons">
          <div className="btn dislike">
            <img src={require("../../assets/img/close.svg")} alt="" />
          </div>
          <div className="btn superlike"></div>
          <div className="btn like">
            <img src={require("../../assets/img/white-heart.svg")} alt="" />
          </div>
        </div>
      </div>

      <br />
      <Link to="/profile">To profile</Link>
      <br />
      <Link to="/matches">To matches</Link>
    </div>
  );
}
