import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../movieSlice";

const MovieInput = () => {
  const [newMovieName, setNewMovieName] = useState("");
  const [newMovieType, setNewMovieType] = useState("");

  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.movies.movies);

  console.log(currentState);

  const handleAddMovie = (e) => {
    e.preventDefault();

    if (newMovieName && newMovieType) {
      // Dispatch addMovie action with the correct payload
      dispatch(addMovie({ name: newMovieName, type: newMovieType }));

      // Reset the input fields after adding the movie
      setNewMovieName("");
      setNewMovieType("");
    }
  };

  return (
    <div>
      <form onSubmit={handleAddMovie}>
        <input
          onChange={(e) => setNewMovieName(e.target.value)}
          type="text"
          placeholder="name"
          value={newMovieName}
        />
        <input
          onChange={(e) => setNewMovieType(e.target.value)}
          placeholder="type"
          type="text"
          value={newMovieType}
        />
        <button type="submit">add movie</button>
      </form>
    </div>
  );
};

export default MovieInput;
