import React from "react";
import { actors } from "../data";

function Actors() {
  const displayActors = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h1>Name: {actor.name}</h1>
        Movies:{" "}
        <ul key={actor.movies}>
          <li>{actor.movies[0]}</li>
          <li>{actor.movies[1]}</li>
          <li>{actor.movies[2]}</li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Actors Page</h1>
      <div>{displayActors}</div>
    </div>
  );
}

export default Actors;
