import { Container, TextField } from "@mui/material";
import React from "react";
import CustomCard from "../CustomCard";

const Login = () => {
  return (
    <Container>
      <CustomCard title="Login to your account">
        <form>
          <TextField
            required
            id="outlined-required"
            type="email"
            label="Email"
            placeholder="Email"
          />{" "}
          <br />
          <TextField
            required
            type="password"
            id="outlined-required"
            label="Password"
            placeholder="Password"
          />
        </form>
      </CustomCard>
    </Container>
  );
};

export default Login;
