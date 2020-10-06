import React from "react";
import data from "./data";
import Card from "../Card";
import "./CardStack.scss";

export default function CardStack() {
  return (
    <div className="card-stack">
      {data.map((card, i) => (
        <Card key={i} person={card} />
      ))}
    </div>
  );
}
