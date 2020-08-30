import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [movies, setMovies, clearMovies] = useLocalStorage("movies");
  const [newMovie, setNewMovie] = useState("");

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((movies || []).concat(newMovie));
    setNewMovie("");
  };

  return (
    <main>
      <h1>Movies to see</h1>
      <form onSubmit={addMovie}>
        <input
          placeholder="add a movie"
          onChange={(e) => setNewMovie(e.target.value)}
          value={newMovie}
        />
      </form>
      <ul>
        {movies ? (
          movies.map((movie) => <li key={movie}>{movie}</li>)
        ) : (
          <small>There has to be something you want to see</small>
        )}
      </ul>

      <button onClick={clearMovies}>
        Remove all Movies
      </button>
    </main>
  );
}
