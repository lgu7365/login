import React, {useState} from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
        <>
        <Route path="/" element={<Home />} />
        </>
        ) : (
        <Route path="/" element={<Login />} />
        )}
      </Routes>
    </Router>
  )
}

export default AppRouter;