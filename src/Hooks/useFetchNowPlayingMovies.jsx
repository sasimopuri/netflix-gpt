import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/moviesSlice";

const useFetchNowPlayingMovies = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchNowPlayingMovies();
  });

  const fetchNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_OPTIONS
    );
    const data = await response.json();
    dispatch(addMovies(data))
  };
};

export default useFetchNowPlayingMovies;
