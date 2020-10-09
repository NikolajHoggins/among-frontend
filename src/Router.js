import React, { useEffect, useState } from "react";
import { Redirect, Router as ReachRouter } from "@reach/router";
import { self } from "./services/UserService";
import Profile from "./views/Profile/Profile";
import Matches from "./views/Matches";
import Login from "./views/Login";
import Home from "./views/Home";

import "./assets/scss/main.scss";
import Navbar from "./components/Navbar";

export default function Router() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    self().then((resp) => {
      if (resp.status === 200) {
        setUser(resp.data);
      } else {
        setUser(null);
      }
    });
  }, []);

  //Create an auth router and a non-auth
  if (user) {
    return (
      <React.Fragment>
        <ReachRouter>
          <Home path="/" />
          <Matches path="/matches" />
          <Profile path="/profile" />
          <Redirect default noThrow from="/login" to="/" />
        </ReachRouter>
        <Navbar />
      </React.Fragment>
    );
  } else {
    return (
      <ReachRouter>
        <Login path="/login" />
        <Redirect default noThrow from="*" to="/login" />
      </ReachRouter>
    );
  }
}
