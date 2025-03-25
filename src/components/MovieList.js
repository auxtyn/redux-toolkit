
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.movies); 
  const dispatch = useDispatch();
  console.log(movies)

  const handleDelete = (id) => {
    dispatch(removeMovie(id));
  };

  return (
  <>
    <div style={{ padding: "10px", textAlign: "center" }}>
      {movies.length === 0 ? (
        <p>No movies available. Add some!</p>
      ) : (
        movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h1>{movie.name}</h1>
            <button
              onClick={() => handleDelete(movie.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            >
              Delete
            </button>
            <h5>ID: {movie.id}</h5>
          </div>
        ))
      )}
    </div>
    </>
  )
};

export default MovieList;

