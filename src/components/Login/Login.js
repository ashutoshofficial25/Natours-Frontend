import { Container } from "@mui/material";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";
import "../../style.css";

// const _login = (email, password) => {
//   login(email, password).then((data) => {
//     if (data) {
//       console.log(data);
//     }
//   });
// };
const loginForm = {
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const LoginSubmit = async (values) => {
    console.log(values.email, values.password);

    const data = await login(values.email, values.password);
    if (data) {
      // localStorage.setItem("token", data.token);
      console.log(data);
      navigate("/");
    } else {
      //console.log(data.finduser.user);
      // localStorage.setItem("token", data.finduser.user);
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
