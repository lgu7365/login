import React, {useState} from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";

const AppRouter = ({isLoggedIn, userObj}) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
        <>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} userObj={userObj} />} />
        </>
        ) : (
        <Route path="/" element={<Login isLoggedIn={isLoggedIn} userObj={userObj} />} />
        )}
      </Routes>
    </Router>
  )
}

export default AppRouter;