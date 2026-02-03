import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

function MovieCard() {
  const { movieId } = useParams();
  const { director } = useOutletContext();

  const movie = director.movies[parseInt(movieId)];

  if (!movie) {
    return <div><h3>Movie not found</h3></div>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>Director: {director.name}</p>
    </div>
  );
}

export default MovieCard;
