import React, { Component } from "react";
import Card from "../Card";
import "./CardStack.scss";
import { getPotentialMatches } from "../../services/UserService";
import { swipe } from "../../services/SwipeService";

export default class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      used: 0,
      matched_user: null,
    };
    this.getUsers();
  }

  getUsers = () => {
    const usersToGet = 10;
    getPotentialMatches(usersToGet, this.state.used).then((resp) => {
      if (this.state.users) {
        this.setState((oldState) => ({
          users: [...resp.data.data, ...oldState.users],
          used: oldState.used + usersToGet,
        }));
      } else {
        this.setState({
          users: resp.data.data,
          used: usersToGet,
        });
      }
    });
  };

  handleCardSwipe = (person, direction) => {
    swipe({
      swiped_id: person,
      action: direction === "right" ? "like" : "dislike",
    }).then((resp) => {
      if (resp.data.data?.match) {
        this.setState({ matched_user: resp.data.data.match_user });
      }
    });

    //Remove person from array in state
    this.setState((oldState) => {
      return { users: oldState.users?.filter((user) => user.id !== person) };
    });
  };

  render() {
    if (this.state.users && this.state.users?.length < 5) {
      this.getUsers();
    }
    //If users left < 10 -> request 50 more and put on the end
    if (this.state.users?.length > 0) {
      const { matched_user } = this.state;
      return (
        <React.Fragment>
          <div
            id="popup"
            className={matched_user ? "shown" : "hidden"}
            onClick={() => this.setState({ matched_user: null })}
          >
            <div className="content">
              <img
                className="close"
                src={require("../../assets/img/close_black.svg")}
                alt=""
              />
              <h1>
                {matched_user?.name} also thinks you're a lil' sus
                <span role="img" aria-label="heart">
                  ❤️
                </span>
              </h1>
              <img src={require("../../assets/img/wave.svg")} alt="" />
              <div
                className="image"
                style={{ backgroundImage: `url(${matched_user?.picture})` }}
              ></div>
            </div>
          </div>

          <div className="card-stack">
            {this.state.users.map((person, i) => (
              <Card
                key={i}
                person={person}
                handleCardSwipe={this.handleCardSwipe}
              />
            ))}
          </div>
        </React.Fragment>
      );
    } else {
      return <h1>no users found</h1>;
    }
  }
}
