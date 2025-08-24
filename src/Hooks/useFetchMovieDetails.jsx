import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useFetchMovieDetails = (movies) => {
  const [moviesDetails, setMoviesDetails] = useState(null);
  const moviesArray = movies?.split(",");

  const useFetchMovieDetails = async (movies) => {
    console.log(movies);
    
    if (!movies) {
      return;
    }
    const promiseArray = movies.map(async (movie) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        TMDB_API_OPTIONS
      );
      const data = await response.json();

      return data;
    });
    const response = await Promise.all(promiseArray);
    console.log("res",response);
    
    setMoviesDetails(response);
  };
  useEffect(() => {
    useFetchMovieDetails(moviesArray);
  }, [movies]);

  return {moviesDetails};
};
export default useFetchMovieDetails;
