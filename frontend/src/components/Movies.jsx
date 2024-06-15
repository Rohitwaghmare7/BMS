import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movies = ({ movies }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
    {movies.map(movie => (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
        <div className="flex-none w-64 bg-white rounded-lg shadow-lg">
          <img src={movie.posterUrl} alt={movie.title} className="w-full h-auto rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-600">{movie.genre.join(', ')}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movies;
