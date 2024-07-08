import { createSlice } from "@reduxjs/toolkit";

const cardBtnSlice = createSlice({
  name: "cardbtn",
  initialState: {
    handlebuttton: "",
  },
  reducers: {
    addbtn: (state) => {
      state.handlebuttton = "Add";
    },
    removebtn: (state) => {
      state.handlebuttton = "Remove";
    },
  },
});

export const { addbtn, removebtn } = cardBtnSlice.actions;
export default cardBtnSlice.reducer;
