import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light border-bottom border-primary border-2">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="vinilos-decorativos-logo-star-wars-borde.jpg"
            type="button"
            className="img-thumbnail rounded"
            alt="..."
            width="80px"
          />
        </Link>
      </div>
      <div className="dropdown me-4">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favoritos
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
