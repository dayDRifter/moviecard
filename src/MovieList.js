import { React, Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in the movie",
      price: 199,
      rating: 8.9,
      star: 0,
      fav: true,
      cart: true,
    };
  }
  render() {
    const { title, plot, price, rating, star, fav, cart } = this.state;
    return (
      <>
        <MovieCard movies={this.state} />
      </>
    );
  }
}
export default MovieList;
