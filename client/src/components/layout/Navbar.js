import React from 'react';
import { Link } from 'react-router-dom';

// css
import './Navbar.css';

export default function Navbar() {
  return (
    <div ClassName="nav-container">
      <nav className="navbar navbar-expand-md navbar-dark" id="override-navbar">
        <Link to="/" className="navbar-brand" id="override-navbar-brand">
          <h3 className="mb-0">Trail Head App</h3>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" id="override-nav-item">
              <Link to="#" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item" id="override-nav-item">
              <Link to="#" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item" id="override-nav-item">
              <Link to="#" className="nav-link">
                Featured Hikes
              </Link>
            </li>

            <li className="nav-item" id="override-nav-item">
              <Link to="#" className="nav-link">
                Get Ready
              </Link>
            </li>

            <li className="nav-item" id="override-nav-item">
              <Link to="#" className="nav-link">
                Trip Planning
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
