import { useParams, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { movieId } = useParams();
  const { director } = useOutletContext();

  const movie = director.movies[movieId];

  if (!movie) {
    return <h3>Movie not found</h3>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </div>
  );
}

export default MovieCard;
