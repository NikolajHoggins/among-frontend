import React, { Component } from "react";
import { Link } from "@reach/router";
import { getMatches } from "../../services/MatchService";
import "./Matches.scss";

export default class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    getMatches().then((resp) => {
      if (resp.data.data === "no matches") return;

      this.setState({ matches: resp.data.data });
    });
  }

  render() {
    if (this.state.matches) {
      return (
        <div className="match-view">
          <div className="matches-container">
            <h1 className="title">Matches</h1>
            <div className="matches">
              {this.state.matches.map((match, i) => (
                <div key={i} className="match">
                  <img alt="match profile'" src={match.picture} />
                  <div className="info">
                    <p className="name">{match.name}</p>
                    <p className="bio">{match.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/">to home</Link>
            <br />
            <Link to="/profile">to profile</Link>
          </div>
        </div>
      );
    } else {
      return <h1>No matches plebtart</h1>;
    }
  }
}
