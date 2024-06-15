import { useContext, useEffect } from "react";
import MovieContext from "../context/movieContext";
import Movies from "./Movies";

function Home() {

  const { Movies: movies, GetAllMovies } = useContext(MovieContext);
  useEffect(() => {
    GetAllMovies();
  }, []);

  return (
    <>
    
      <div>
        <h1>Movies</h1>
        <Movies movies={movies} />
      </div>
    </>
  );
}

export default Home;
