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
      <MoviesList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MoviesList title="Trending Movies" movies={trendingMovies} />
      <MoviesList title="Popular Movies" movies={popularMovies} />
    </div>
  );
};

export default SecondContainer;
