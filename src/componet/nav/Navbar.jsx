import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/Category">
              Category
            </Link>
            <Link className="nav-item nav-link" to="/Login">
              Login
            </Link>
            <Link className="nav-item nav-link" to="/Register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
