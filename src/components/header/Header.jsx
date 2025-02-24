import React from "react";
import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>Princess App</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <IoIosArrowDown />
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/SignIn">Sign In</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
