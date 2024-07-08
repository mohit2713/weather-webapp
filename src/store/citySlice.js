import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "cityValue",
  initialState: {
    city: "Chandigarh",
  },
  reducers: {
    cityName: (state, action) => {
      state.city =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
    },
  },
});

export const { cityName } = citySlice.actions;
export default citySlice.reducer;
