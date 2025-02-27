const Movie = ({movie}) => {
    return (
        <li className="movie-item" key={movie.id}>
                        <img src={movie.poster} alt={movie.title} />

                    <p>{movie.title} by {movie.director}
                        was released on {movie.year}
                    </p>
                    <p>Rating: {movie.rating}</p>
                    </li>
    )
}

export default Movie;