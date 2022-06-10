import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import "../../style.css";

let token = localStorage.getItem("token");
console.log(token);

const _logout = () => {
  const navigate = useNavigate();
  console.log("btn clicked");
  logout().then((data) => {
    if (data.status == "success") {
      console.log(data);
      navigate("/");
    }
  });
};

const displayLogin = () => {
  if (token) {
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
          <span>Ashu</span>
        </Link>
      </nav>
    );
  } else
    return (
      <nav className="nav nav--user">
        <Link to="/login" class="nav__el">
          Log in
        </Link>
        <Link to="/signup" class="nav__el nav__el--cta">
          Sign up
        </Link>
      </nav>
    );
};

const Header = () => {
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
