import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../../style.css";

let token = localStorage.getItem("token");
console.log(token);

const displayLogin = () => {
  if (token) {
    return (
      <nav className="nav nav--user">
        <a href="#" className="nav__el">
          Logout
        </a>
        <a href="#" className="nav__el">
          <img src="" alt="User photo" className="nav__user-img" />
          <span>Jonas</span>
        </a>
      </nav>
    );
  } else
    return (
      <nav className="nav nav--user">
        <button class="nav__el">Log in</button>
        <button class="nav__el nav__el--cta">Sign up</button>
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
