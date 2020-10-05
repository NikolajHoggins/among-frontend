import React from "react";
import { Link } from "@reach/router";

export default function Matches() {
  return (
    <div>
      Matches
      <br />
      <Link to="/">to home</Link>
      <br />
      <Link to="/profile">to profile</Link>
    </div>
  );
}
