import { Container, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import "../../style.css";
import { signup } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const signupFrom = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const signupSubmit = async (values) => {
    console.log(
      values.name,
      values.email,
      values.password,
      values.passwordConfirm
    );

    if (values.password !== values.passwordConfirm) {
      console.log("password are not same");
    } else {
      const data = await signup(
        values.name,
        values.email,
        values.password,
        values.passwordConfirm
      );
      if (data) {
        console.log(data);
        navigate("/");
      }
    }
  };

  return (
    <Container>
      <main className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Create a new account</h2>
          <Formik initialValues={signupFrom} onSubmit={signupSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <label className="form__label" htmlFor="email">
                    Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={values.name}
                    className="form__input"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required="required"
                  />
                </div>

                <div className="form__group">
                  <label className="form__label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    onChange={handleChange}
                    value={values.email}
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
                    value={values.password}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    value={values.passwordConfirm}
                    className="form__input"
                    id="passwordConfirm"
                    type="password"
                    placeholder="••••••••"
                    required="required"
                    minLength={8}
                  />
                </div>
                <div className="form__group">
                  <button type="submit" className="btn btn--green">
                    Sign Up
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </main>
    </Container>
  );
};

export default Signup;
