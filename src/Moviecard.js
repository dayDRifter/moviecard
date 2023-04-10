import { Component } from "react";
import MovieList from "./MovieList";

class MovieCard extends Component {
  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };
  handleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  };
  increaseRating = () => {
    // first way to write setState
    if (this.state.star >= 5) {
      return;
    }
    this.setState({
      star: this.state.star + 0.5,
    });
    // // second way to write setState
    // this.setState((prevState) => {
    //   return {
    //     star: prevState.star + 0.5,
    //   };
    // });
  };
  decreaseRating = () => {
    if (this.state.star <= 0) {
      return;
    }
    this.setState({
      star: this.state.star - 0.5,
    });
  };
  render() {
    const { title, plot, price, rating, star, fav, cart } = this.props.movies;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg"
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/512/2801/2801932.png"
                  onClick={this.decreaseRating}
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/616/616490.png"
                  className="stars"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
                  onClick={this.increaseRating}
                />
                <span>{star}</span>
              </div>
              {fav ? (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favourites
                </button>
              ) : (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  Un-favourites
                </button>
              )}
              {cart ? (
                <button className="cart-btn" onClick={this.handleCart}>
                  Add to cart
                </button>
              ) : (
                <button className="remove-btn" onClick={this.handleCart}>
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
