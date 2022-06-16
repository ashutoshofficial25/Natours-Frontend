import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import "../../style.css";
import { UserContext } from "../../contexts/userContext";

const Header = () => {
  const { loggedIn, setLoggedin, currentUser, setCurrentUser } =
    useContext(UserContext);
  const navigate = useNavigate();

  const _logout = () => {
    console.log("btn clicked");
    sessionStorage.removeItem("jwt");
    setCurrentUser(false);
    navigate("/login");
    // logout()
    //   .then((data) => {
    //     if (data.status == "success") {
    //       //setLoggedin(false);
    //       sessionStorage.removeItem("user");
    //       console.log(data);
    //       navigate("/login");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  console.log("user:", currentUser);
  console.log("ses:", sessionStorage);

  const displayLogin = () => {
    if (currentUser) {
      return (
        <nav className="nav nav--user">
          <button onClick={() => _logout()} className="nav__el">
            Logout
          </button>
          <Link to="/me" className="nav__el">
            <img
              src="https://avatars.githubusercontent.com/u/91019894?v=4"
              alt="User photo"
              className="nav__user-img"
            />
            <span>{currentUser.data?.user.name}</span>
          </Link>
        </nav>
      );
    } else
      return (
        <nav className="nav nav--user">
          <Link to="/login" className="nav__el">
            Log in
          </Link>
          <Link to="/signup" className="nav__el nav__el--cta">
            Sign up
          </Link>
        </nav>
      );
  };

  return (
    <Container>
      <header className="header">
        <nav className="nav nav--tours">
          <Link to="/" className="nav__el">
            All tours
          </Link>
          <form className="nav__search">
            <button className="nav__search-btn">
              <svg>
                <use xlinkHref="img/icons.svg#icon-search" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search tours"
              className="nav__search-input"
            />
          </form>
        </nav>
        <div className="header__logo">
          <img
            src="https://www.natours.dev/img/logo-green.png"
            alt="Natours logo"
          />
        </div>
        {displayLogin()}
      </header>
    </Container>
  );
};
export default Header;
