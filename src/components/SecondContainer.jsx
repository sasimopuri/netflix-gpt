import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import useFetchPopularMovies from "../Hooks/useFetchPopularMovies";

const SecondContainer = () => {
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlaying);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);

  useFetchPopularMovies();

  return (
    <div className="text-white">
      <div className="text-xl font-bold">Now Playing Movies</div>
      <MoviesList movies={nowPlayingMovies} />
      <div className="text-xl font-bold">Trending Movies</div>
      <MoviesList title="" movies={trendingMovies} />
      <div className="text-xl font-bold">Popular Movies</div>
      <MoviesList title="Popular Movies" movies={popularMovies} />
    </div>
  );
};

export default SecondContainer;
