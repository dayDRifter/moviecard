import React from "react";
// import styled from "styled-components";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
  //   cartIncrease = () => {};
  render() {
    const { cartCount } = this.props;
    console.log(cartCount);
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>MOVIE APP</div>
          <div className={styles.cartIconContainer}>
            <img
              className={styles.cartIcon}
              src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
              alt="cart-icon"
            />
            <span className={styles.cartCount}>{cartCount}</span>
          </div>
        </div>
        {/* 
                    // styling in Styled component
             <Nav>
          <Title> Movie Card</Title>
          <Container>
            <Icon
              alt="cart"
              src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            />
            <Cart color="blue" show={true}>
              0
            </Cart>
          </Container>
        </Nav> */}
      </>
    );
  }
}

export default Navbar;

//inline styling
// const styles = {
// //   nav: {
// //     height: 70,
// //     backgroundColor: "#4267b2",
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     position: "relative",
//   },
//   title: {
//     // fontSize: 30,
//     // color: "#fff",
//     // fontWeight: 600,
//     // fontFamily: '"Montserrat", sans-serif',
//     // textTransform: "uppercase",
//     // marginLeft: 20,
//   },
//   cartContainer: {
//     position: "relative",
//     cursor: "pointer",
//   },
//   cartIcon: {
//     height: 48,
//     marginRight: 20,
//   },
//   cartCount: {
//     background: "orange",
//     borderRadius: "50%",
//     padding: "4px 8px",
//     position: "absolute",
//     right: 10,
//     top: -5,
//     fontSize: 12,
//   },
// };
