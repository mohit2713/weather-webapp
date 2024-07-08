import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "btn",
  initialState: {
    buttonShow: true,
  },
  reducers: {
    toggle: (state) => {
      state.buttonShow = !state.buttonShow;
    },
  },
});

export const { toggle } = buttonSlice.actions;
export default buttonSlice.reducer;
