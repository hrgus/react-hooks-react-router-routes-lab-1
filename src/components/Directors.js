import React from "react";
import { directors } from "../data";

function Directors() {
  
  const allDirectors = directors.map((director) => {
    let directorsMovies = directors.movies.map((movie) => <li>{movie}</li>)
    return (
      <div>
        {director.name}
        <ul>{directorsMovies}</ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors;
