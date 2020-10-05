import React from "react";
import { Link } from "@reach/router";

export default function Home() {
  return (
    <div>
      Home
      <br />
      <Link to="/profile">To profile</Link>
      <br />
      <Link to="/matches">To matches</Link>
    </div>
  );
}
