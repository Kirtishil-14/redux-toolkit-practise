import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "normal",
};

const smallBigSlice = createSlice({
  name: "smallBig",
  initialState,
  reducers: {
    small: (state) => {
      state.value = "10px";
    },
    big: (state) => {
      state.value = "30px";
    },
  },
});

export const { small, big } = smallBigSlice.actions;

export default smallBigSlice.reducer;
