import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    videoDetails: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addVideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addMovies, addVideoDetails } = movieSlice.actions;
