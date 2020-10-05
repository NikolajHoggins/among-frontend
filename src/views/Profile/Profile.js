import React from "react";
import { Link } from "@reach/router";

export default function Profile() {
  return (
    <div>
      Profile
      <br />
      <Link to="/">to home</Link>
      <br />
      <Link to="/matches">to matches</Link>
    </div>
  );
}
