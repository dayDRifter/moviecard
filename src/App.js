import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesdata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }
  handleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    if (movies[mid].cart) {
      cartCount = cartCount + 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies,
      cartCount,
    });
  };
  handleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState({
      movies,
    });
  };

  handleIncStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].star >= 5) {
      return;
    }

    movies[mid].star += 0.5;
    this.setState({
      movies: movies,
    });
  };
  handleDecStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({
      movies,
    });
  };
  // theToggleCart = (movie) => {
  //   let { movies, cartCount } = this.state;
  //   const mid = movies.indexOf(movie);
  //   movies[mid].cart = !movies[mid].cart;
  //   if (movies[mid].cart) {
  //     cartCount = cartCount + 1;
  //   } else {
  //     cartCount -= 1;
  //   }
  //   this.setState({
  //     movies,
  //     cartCount,
  //   });
  // };
  render() {
    const { movies, cartCount } = this.state;

    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          decStars={this.handleDecStar}
          toggleCart={this.handleCart}
          // toggle={this.theToggleCart}
          toggleFav={this.handleFav}
          key={movies.id}
        />
      </>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <MovieList />
//     </div>
//   );
// }

export default App;
