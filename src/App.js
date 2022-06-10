import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Tour from "./components/Tour/Tour";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tourDetails" element={<Tour />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
