import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Harry Potter",
    type: "action",
  },
  {
    id: 2,
    name: "Interstellar",
    type: "exploratory",
  },
  {
    id: 3,
    name: "The Rookie",
    type: "action",
  },
];

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: state.length + 1,
        name: action.payload.name,
        type: action.payload.type,
      };
      state.push(newMovie);
    },

    removeMovie: (state, action) => {
      return state.filter((movies) => movies.id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;
