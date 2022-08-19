import { Container } from "@mui/material";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../../../actions/userActions";
import { Context } from "../../../contexts/userContext";
import "../../../style.css";

const Login = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) navigate("/");
  }, [user]);

  const loginForm = {
    email: "",
    password: "",
  };

  const LoginSubmit = async (values) => {
    console.log(values.email, values.password);

    const data = await login(values.email, values.password);
    console.log("log", data.data.user);
    if (data.status === "success") {
      dispatch({
        type: "LOGIN",
        payload: data.data.user,
      });
      localStorage.setItem("user", JSON.stringify(data.data.user));
      Swal.fire({
        icon: "success",
        title: data.status,
        showConfirmButton: true,
        timer: 1500,
      });

      navigate("/");
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
              <div
                className="form__group"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button type="submit" className="btn btn--green">
                  Login
                </button>
                <h2>
                  {" "}
                  New to Natours? <Link to="/signup">Singup</Link>
                </h2>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Login;
