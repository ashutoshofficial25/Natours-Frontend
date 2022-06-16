import { Container } from "@mui/material";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../../actions/userActions";
import { UserContext } from "../../contexts/userContext";
import "../../style.css";

const Login = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const { setCurrentUser, setLoggedin } = useContext(UserContext);

  const navigate = useNavigate();

  const loginForm = {
    email: "",
    password: "",
  };

  const LoginSubmit = async (values) => {
    console.log(values.email, values.password);

    const data = await login(values.email, values.password);
    console.log("log", data.status);
    if (data.status === "success") {
      localStorage.setItem("jwt", data.token);
      Swal.fire({
        icon: "success",
        title: data.status,
        showConfirmButton: false,
        timer: 1500,
      });
      setCurrentUser(data);
      //setLoggedin(true);
      navigate("/");
      console.log("log", data.status);
    } else if (data.error) {
      Swal.fire({
        icon: "error",
        title: "Invalid email or password",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("error");
    }
  };

  return (
    <Container>
      <main className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form className="form" onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                    value={values.password}
                    className="form__input"
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required="required"
                    minLength={8}
                  />
                </div>
                <div className="form__group">
                  <button type="submit" className="btn btn--green">
                    Login
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

export default Login;
