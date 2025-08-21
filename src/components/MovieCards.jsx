const MovieCards = ({ movies }) => {
  if (!movies) return;

  return (
    <div className="flex">
      {movies?.results?.map((movie) => (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
