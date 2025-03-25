import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import counterReducer from "./counterSlice";
import usersReducer from "./features/UsersSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    counter: counterReducer,
    users: usersReducer,
  },
});
export default store;
