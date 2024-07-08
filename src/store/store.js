import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice";
import buttonSlice from "./buttonSlice";
import cardBtnSlice from "./cardBtnSlice";
import citySlice from "./citySlice";

const store = configureStore({
  reducer: {
    fav: favSlice,
    btn: buttonSlice,
    cardbtn: cardBtnSlice,
    cityValue: citySlice,
  },
});

export default store;
