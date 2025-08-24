import { useSelector } from "react-redux";
import useFetchMovieDetails from "../Hooks/useFetchMovieDetails";
import MoviesList from "./MoviesList";

const GptSuggestionMovies = () => {
  const moviesSuggestions = useSelector((state) => state.gptSlice);
  const {moviesDetails} = useFetchMovieDetails(moviesSuggestions);

  return (
    <>
      <div className="flex flex-wrap gap-4 px-[22%] py-[6%]">
        {moviesDetails?.map((movie) => (
          <MoviesList movies={movie} />
        ))}
      </div>
    </>
  );
};

export default GptSuggestionMovies;
