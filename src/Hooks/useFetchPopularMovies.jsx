import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies, addTrendindMovies } from "../utils/moviesSlice";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();
  const fetchPopularMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    let data = await response.json();
    dispatch(addPopularMovies(data));
  };

  const fetchTrendingMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    let data = await response.json();
    dispatch(addTrendindMovies(data));
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchTrendingMovies();
  }, []);
};

export default useFetchPopularMovies;
