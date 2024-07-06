import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartslice",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    empty: (state) => {
      state.items.length = 0;
    },
  },
});
export const { add, remove, empty } = cartSlice.actions;

export default cartSlice.reducer;
