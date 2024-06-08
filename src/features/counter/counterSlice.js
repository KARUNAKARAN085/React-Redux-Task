import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 549,
    quantity: 1,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 549;
      state.quantity += 1;
    },
    decrement: (state, action) => {
      if (state.value > 549) {
        state.value -= 549;
        state.quantity -= 1;
      }
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectQuantity = (state) => state.counter.quantity;
