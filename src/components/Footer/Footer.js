import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="py-5">
        <span className="color">I T</span> School
      </h2>
      <p>Copyright © 2021 All Rights Reserved By
        <span className="color">IT School</span>
      </p>

      <div>
        <NavLink className="nav-link active hover" aria-current="page" to="/home">Home</NavLink>
        <NavLink className="nav-link active hover" to="/courses">Courses</NavLink>

        <NavLink className="nav-link active hover" to="/about">About us</NavLink>

        <NavLink className="nav-link active hover" to="/contact">Contact us</NavLink>
      </div>

    </div>
  );
};

export default Footer;