import { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  padding: 0 20px;
  box-sizing: border-box;
`;
const Card = styled.div`
  background: #aaa3a3;
  padding: 0;
  border: none;
  border-radius: 10px;
  display: flex;
  &:hover {
    background: #0f0f;
  }
  &:last-child {
    margin-bottom: 50px;
  }
  &:not(:first-child) {
    margin-top: 20px;
  }
`;
const Left = styled.div`
  flex: 1;
  padding: 5px;
`;
const Pos = styled.img`
  height: 250px;
`;
const Right = styled.div`
  position: relative;
  flex: 10;
`;
class MovieCard extends Component {
  //   handleFav = () => {
  //     this.setState({
  //       fav: !this.state.fav,
  //     });
  //   };
  //   handleCart = () => {
  //     this.setState({
  //       cart: !this.state.cart,
  //     });
  //   };
  //   increaseRating = () => {
  //     // first way to write setState
  //     if (this.state.star >= 5) {
  //       return;
  //     }
  //     this.setState({
  //       star: this.state.star + 0.5,
  //     });
  //     // // second way to write setState
  //     // this.setState((prevState) => {
  //     //   return {
  //     //     star: prevState.star + 0.5,
  //     //   };
  //     // });
  //   };
  //   decreaseRating = () => {
  //     if (this.state.star <= 0) {
  //       return;
  //     }
  //     this.setState({
  //       star: this.state.star - 0.5,
  //     });
  //   };
  render() {
    const { title, plot, price, rating, star, fav, cart, poster } =
      this.props.movies;
    const { movies, addStars, decStars, toggleCart, toggleFav } = this.props;
    return (
      <Main>
        <Card>
          <Left>
            <Pos
              alt="Poster"
              //   src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg"
              src={poster}
            />
          </Left>

          <Right>
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
                  onClick={() => {
                    decStars(movies);
                  }}
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
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span>{star}</span>
              </div>
              {/* {fav ? (
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
              )} */}
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {
                  toggleFav(movies);
                }}
              >
                {fav ? "Unfavourite" : "Favourite"}
              </button>
              <button
                className={cart ? "remove-btn" : "cart-btn"}
                onClick={() => {
                  toggleCart(movies);
                }}
              >
                {cart ? "Remove from Cart" : "Add to cart"}
              </button>
            </div>
          </Right>
        </Card>
      </Main>
    );
  }
}

export default MovieCard;
