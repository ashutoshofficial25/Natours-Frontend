import React from "react";
import { Box, Grid, Link, makeStyles, Typography } from "@mui/material";
import "../../style.css";
const Footer = () => {
  return (
    <div>
      {/*footer*/}
      <footer className="footer">
        <div className="footer__logo">
          {" "}
          <img
            src="https://www.natours.dev/img/logo-green.png"
            alt="Natours Logo"
          />
        </div>
        <ul className="footer__nav">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Download apps </a>
          </li>
          <li>
            <a href="#">Become guide</a>
          </li>
          <li>
            <a href="#">Carrier</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
