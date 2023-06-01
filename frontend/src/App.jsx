import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import WelcomePage from "./pages/Welcome";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Homepage";
import HighlightInfo from "./pages/HighlightInfo";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import EditProfile from "./pages/editProfile";
import Error from "./pages/Error";
import ExhibitionPage from "./pages/ExhibitionPage";
import ExhibitionInfo from "./pages/ExhibitionInfo";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // function checkAuthentication() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }

  // useEffect(() => {
  //   checkAuthentication();
  // }, []);

  // function onSignOut() {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userId");
  //   checkAuthentication();
  // }
  // function onSignIn() {
  //   checkAuthentication();
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/highlightInfo" element={<HighlightInfo />} />
        <Route path="/exhibition" element={<ExhibitionPage />} />
        <Route path="/exhibitionifo" element={<ExhibitionInfo />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
