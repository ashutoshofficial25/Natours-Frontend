import { Container, TextField } from "@mui/material";
import React from "react";
import CustomCard from "../CustomCard";
import "../../style.css";

const Signup = () => {
  return (
    <Container>
      <main className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Create a new account</h2>
          <form className="form">
            <div className="form__group">
              <label className="form__label" htmlFor="email">
                Email address
              </label>
              <input
                className="form__input"
                id="email"
                type="email"
                placeholder="you@example.com"
                required="required"
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                className="form__input"
                id="password"
                type="password"
                placeholder="••••••••"
                required="required"
                minLength={8}
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="password">
                Confirm Password
              </label>
              <input
                className="form__input"
                id="password"
                type="password"
                placeholder="••••••••"
                required="required"
                minLength={8}
              />
            </div>
            <div className="form__group">
              <button className="btn btn--green">Sign Up</button>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default Signup;
