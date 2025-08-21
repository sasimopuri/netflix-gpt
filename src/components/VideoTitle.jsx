const VideoTitle = ({ title, overview }) => {

  return (
    <div className="w-screen aspect-video pt-[14%] px-6 md:px-14 absolute text-white bg-gradient-to-r from-black">
      <div className="text-5xl font-bold text-zinc-200">{title}</div>
      <div className="font-semibold w-1/4 text-wrap m-2 text-zinc-200">{overview}</div>
      <button className="px-4 py-2 rounded-lg bg-white cursor-pointer text-black font-bold text-lg">▶️ Play</button>
      <button className="px-4 py-2 m-2 rounded-lg bg-gray-500 cursor-pointer text-white text-lg opacity-65">ℹ️ More info</button>
    </div>
  );
};

export default VideoTitle;
