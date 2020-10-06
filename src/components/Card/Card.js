import React from "react";
import TinderCard from "react-tinder-card";

export default function Card({ person }) {
  return (
    <TinderCard className="card">
      <div
        style={{ backgroundImage: `url(${person.pics[0]})` }}
        alt="picture"
        className="picture"
      />
      <div className="info">
        <p className="name">{`${person.name}, ${person.age}`}</p>
        <p className="location">{`${person.distance}`}</p>
      </div>

      <p className="bio">{person.bio}</p>
    </TinderCard>
  );
}
