import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoDetails } from "../utils/moviesSlice";

const useFetchVideoDetails = (movieId) => {
  const dispatch = useDispatch();
  const fetchVideoDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/+${movieId}+/videos?language=en-US`,
      TMDB_API_OPTIONS
    );
    const data = await response.json();
    dispatch(addVideoDetails(data));
  };
  useEffect(() => {
    fetchVideoDetails();
  }, []);
};
export default useFetchVideoDetails;
