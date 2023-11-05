import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>#VANLIFE</h1>
      <div className="nav__links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
