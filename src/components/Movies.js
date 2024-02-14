import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h1> title :{movie.title}</h1>
        <h2>time :{movie.time}</h2>
        Genres:
        <ul>
          <li>{movie.genres[0]}</li>
          <li>{movie.genres[1]}</li>
          <li>{movie.genres[2]}</li>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      <div>{displayMovies}</div>
    </div>
  );
}

export default Movies;
