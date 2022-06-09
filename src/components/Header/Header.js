import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <Container>
      <Grid
        className="nav-grid"
        p={2}
        container
        sx={{ alignItems: "center", marginBottom: 12 }}
        style={{ backgroundColor: "#424242" }}
      >
        <Grid item xs={4} className="grid-item">
          <Button>All Tours</Button>
          <Input type="search" />
        </Grid>
        <Grid item xs={4} className="grid-item">
          <img
            className="Logo"
            src="https://www.natours.dev/img/logo-white.png"
            height={36}
          />
        </Grid>
        <Grid item xs={4} className="grid-item">
          <Link underline="none" to="/login">
            Log-in
          </Link>
          <Link to="/signup">Sign-Up</Link>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Header;
