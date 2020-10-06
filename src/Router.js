import React from "react";
import { Router as ReachRouter } from "@reach/router";
import Home from "./views/Home";
import Matches from "./views/Matches";
import Profile from "./views/Profile/Profile";
import "./assets/scss/main.scss";

export default function Router() {
  return (
    <div>
      <ReachRouter>
        <Home path="/" />
        <Matches path="/matches" />
        <Profile path="/profile" />
      </ReachRouter>
    </div>
  );
}
