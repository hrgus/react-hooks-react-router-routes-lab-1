import React from "react";
import { directors } from "../data";

function Directors() {
  
  const allDirectors = directors.map((director) => {
    
    let directorsMovies = director.movies.map((movie) => <li key={movie}>{movie}</li>)
    return (
      <div key={director.name}>
        {director.name}
        <ul>{directorsMovies}</ul>
      </div>
    )
  });
  
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors;
