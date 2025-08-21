import { useSelector } from "react-redux";
import useFetchNowPlayingMovies from "../Hooks/useFetchNowPlayingMovies";
import VideoComponent from "./VideoCOmponent";
import VideoTitle from "./VideoTitle";

const MainComponent = () => {
  const movie = useSelector((state) => state.movies?.nowPlaying?.results[0]);

  if (!movie) return;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={movie.title} overview={movie.overview} />
      <VideoComponent />
      
    </div>
  );
};
export default MainComponent;
