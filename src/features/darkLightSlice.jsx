import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const darkLightSlice = createSlice({
  name: "darkLight",
  initialState,
  reducers: {
    dark: (state) => {
      state.value = "white";
    },
    light: (state) => {
      state.value = "black";
    },
  },
});

export const { dark, light } = darkLightSlice.actions;

export default darkLightSlice.reducer;
