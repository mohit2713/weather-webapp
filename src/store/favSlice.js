import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    cartList: [],
  },
  reducers: {
    addCart: (state, action) => {
      // console.log(state.cartList);
      state.cartList.push(action.payload);
    },
    removeCart: (state) => {
      // console.log(state.cartList);
      state.cartList.pop();
    },
    removeAllCart: (state) => {
      state.cartList.length = 0;
    },
  },
});

export const { addCart, removeCart, removeAllCart } = favSlice.actions;
export default favSlice.reducer;
