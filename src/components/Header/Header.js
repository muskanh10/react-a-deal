import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">React-A-Deal</Link>
        <form className="d-flex" role="search">
          <Link to = "/cart" className="btn btn-outline-success" type="submit">
          <i class="bi bi-cart"></i>
          <span className="ms-3 badge rounded-pill bg-dark">0</span>
          </Link>
        </form>
      </div>
    </nav>
    <Navbar />
    </>
 );
};

export default Header;
