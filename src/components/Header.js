import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import "../style.css";
import { Context } from "../contexts/userContext";
import Swal from "sweetalert2";

const Header = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  console.log("user:", user);

  const _logout = async () => {
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("user");
    const data = await logout();

    Swal.fire({
      icon: "success",
      title: "Logged Out",
      timer: 2000,
    });
    navigate("/login");
  };

  return (
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

      {user === null ? (
        <nav className="">
          <Link to="/login" className="nav__el">
            Log in
          </Link>
          <Link to="/signup" className="nav__el nav__el--cta">
            Sign up
          </Link>
        </nav>
      ) : (
        <nav className="nav-logout">
          <button onClick={() => _logout()} className="nav__el">
            Logout
          </button>

          <Link to="/me" className="nav__el">
            <img
              src="https://avatars.githubusercontent.com/u/91019894?v=4"
              alt="User photo"
              className="nav__user-img"
            />
            <span>{user.name}</span>
          </Link>
        </nav>
      )}
    </header>
  );
};
export default Header;
