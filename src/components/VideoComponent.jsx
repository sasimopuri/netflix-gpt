import { useSelector } from "react-redux";
import useFetchVideoDetails from "../Hooks/useFetchVideoDetails";

const VideoComponent = () => {
  const movieVideoDetails = useSelector((state) => state.movies?.videoDetails);

  useFetchVideoDetails();
  if (!movieVideoDetails) return;
  let trailers = movieVideoDetails?.results.filter(
    (result) => result.type === "Trailer"
  );
  let trailerKey = trailers[0].key;
  return (
    <div className="w-screen">
      <iframe
        src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1&loop=1&playlist=${trailerKey}`}
        title="YouTube video player"
        className="w-screen aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
