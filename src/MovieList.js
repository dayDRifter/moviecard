import { React, Component } from "react";
import MovieCard from "./Moviecard";
class MovieList extends Component {
  render() {
    // const { title, plot, price, rating, star, fav, cart, poster } =
    //   this.state.movies;
    const { movies, addStars, decStars, toggleCart, toggleFav } = this.props;
    //   const { addStars, decStars, toggleCart, toggleFav } =
    //     this.props;

    return (
      <>
        {movies.map((movies) => (
          <MovieCard
            movies={movies}
            addStars={addStars}
            decStars={decStars}
            toggleCart={toggleCart}
            toggleFav={toggleFav}
            // toggle={toggle}
            key={movies.id}
          />
        ))}
      </>
    );
  }
}
export default MovieList;
