import React from "react";
import { movies } from "../data";

function Movies() {

  const allMovies = movies.map((movie) => {
    let movieGenre = movie.genres.map((genre) => <li>{genre}</li>)
    return (
      <div>
        {`${movie.title}, ${movie.time}`}
        <ul key={movie.title}>
          {movieGenre}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Movies Page</h1> 
      {allMovies}
    </div>
  );
}

export default Movies;
