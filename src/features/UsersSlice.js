// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   users: [],
// };

// const UsersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     setUsers: (state, action) => {
//       state.users = action.payload;
//     },
//   },
// });

// export const { setUsers } = UsersSlice.actions;
// export default UsersSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle loading state when fetchUsers is pending
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when fetching starts
      })
      // Handle success case
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      // Handle error case
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
