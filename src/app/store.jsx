import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import darkLightReducer from "../features/darkLightSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    darkLight: darkLightReducer,
  },
});
