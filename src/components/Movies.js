import React from "react";
import { movies } from "../data";

function Movies() {

  const allMovies = movies.map((movie) => {
    let movieGenre = movie.genres.map((genre) => <li key={genre}>{genre}</li>)
    
    return (
      <div key={movie.title}>
        {`${movie.title}, ${movie.time}`}
        <ul>
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
