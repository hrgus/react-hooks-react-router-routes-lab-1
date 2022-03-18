import React from "react";
import { actors, directors } from "../data";

function Actors() {
  const allActors = actors.map((actor) => {
    
    let actorsMovies = actor.movies.map((movie) => <li key={movie}>{movie}</li>)
    return (
      <div key={actor.name}>
        {actor.name}
        <ul>{actorsMovies}</ul>
      </div>
    )
  });
  
  
  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
}

export default Actors;
