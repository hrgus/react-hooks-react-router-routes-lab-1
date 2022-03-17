import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)
  
  
  const movieGenres = movies.map((movie) => {
    return (
      <li key={movie.title}>{movie.genres}</li>
    
    );
  })

  const allMovies = movies.map((movie) => {
    return (
      <div>
        {movie.title + "," + " " + movie.time}
        <ul key={movie.title}>{movieGenres}</ul>
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
