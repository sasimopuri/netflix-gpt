const MoviesList = (props) => {
  let { title, movies } = props;
  if (!movies) return;

  return (
    <>
      <div className="text-xl font-bold">{title}</div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {movies?.results.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
