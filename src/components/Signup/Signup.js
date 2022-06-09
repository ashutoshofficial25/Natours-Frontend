import { Container, TextField } from "@mui/material";
import React from "react";
import CustomCard from "../CustomCard";

const Signup = () => {
  return (
    <Container>
      <CustomCard title="Create a new account">
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
          />{" "}
          <br />
          <TextField
            required
            type="password"
            id="outlined-required"
            label="Confirm Password"
            placeholder="Comfirm Password"
          />
        </form>
      </CustomCard>
    </Container>
  );
};

export default Signup;
