import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSuggestions",
  initialState: null,
  reducers: {
    addSuggestions: (state, action) => {
      return action.payload;
    },
    removeSuggestions: (state, action) => {
      return null;
    },
  },
});
export const { addSuggestions, removeSuggestions } = gptSlice.actions;
export default gptSlice.reducer;
