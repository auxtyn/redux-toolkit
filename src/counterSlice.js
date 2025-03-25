import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrCount: (state) => {
        state.counter++;
    },
    decrCount: (state) => {
        state.counter --;
      },
    
  },
});

export const { incrCount, decrCount } = counterSlice.actions;

export default counterSlice.reducer;
