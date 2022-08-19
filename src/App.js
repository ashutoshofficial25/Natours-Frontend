import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/pages/Footer/Footer";
import Header from "./components/Header";
import Homepage from "./components/pages/Homepage/Homepage";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import UserPrfile from "./components/UserProfile";
import { Provider } from "./contexts/userContext";

import Tour from "./components/pages/Tour/Tour";
import ErrorPage from "./error";

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/me" element={<UserPrfile />} />
            <Route path="/tourDetails" element={<Tour />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
