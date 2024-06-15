import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from "react";
import MovieContext from "../context/movieContext";

const MovieDetails = () => {
  const { id } = useParams();
  const { Movies: movies,GetAllMovies } = useContext(MovieContext);

  useEffect(() => {
    GetAllMovies();
  }, []);

  console.log(movies)
  const movie = movies.find(movie => movie.id == parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="p-4">
      <div className="flex-none w-64 bg-white rounded-lg shadow-lg">
        <img src={movie.posterUrl} alt={movie.title} className="w-full h-auto rounded-t-lg" />
        <div className="p-4">
          <h1>id</h1>
          <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
          <p className="text-gray-600">{movie.genre.join(', ')}</p>
          <p className="text-gray-700 mt-2">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieDetails;
