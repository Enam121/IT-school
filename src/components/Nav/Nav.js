import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/courses">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <form className="d-flex ">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </section>

  );
};

export default Nav;

