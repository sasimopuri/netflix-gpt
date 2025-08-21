import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    videoDetails: null,
    popularMovies: null,
    trendingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addVideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendindMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addMovies, addVideoDetails, addPopularMovies, addTrendindMovies } = movieSlice.actions;
