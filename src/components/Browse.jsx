import MainComponent from "./MainComponent";
import useFetchNowPlayingMovies from "../Hooks/useFetchNowPlayingMovies";

const Browse = () => {
  useFetchNowPlayingMovies();
  return (
    <div>
      <MainComponent />
    </div>
  );
};

export default Browse;
