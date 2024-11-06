
import {movies} from "./data/movies.js"
import Movie from "./Movie.jsx"

   const MovieComponent = () => {
    return (
        <div className="movie-container">
        <h2>Movies</h2>
        <ul className="movie-list">
            {
                movies.map((movie) => (
                    <Movie 
                    key = {movie.id}
                    movie = {movie}/>
                ))
            }
        </ul>
        </div>
    )
  }

  export default MovieComponent