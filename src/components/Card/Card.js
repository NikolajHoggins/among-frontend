import React from "react";
import TinderCard from "react-tinder-card";

export default function Card({ person, handleCardSwipe }) {
  const handleOnSwipe = (direction) => {
    handleCardSwipe(person.id, direction);
  };
  return (
    <TinderCard
      className="card"
      onSwipe={handleOnSwipe}
      preventSwipe={["up", "down"]}
    >
      <div
        style={{ backgroundImage: `url(${person.picture})` }}
        alt="picture"
        className="picture"
      />
      <div className="info">
        <p className="name">{`${person.name}, ${person.age}`}</p>
        <p className="location">{`${person.distance}`}</p>
      </div>

      <p className="bio">{person.description}</p>
    </TinderCard>
  );
}
