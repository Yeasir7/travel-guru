import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    const logo = "/images/logo.png";
    const links = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link >Destination</Link>
        </li>
        <li>
          <Link>blogs</Link>
        </li>
        <li>
          <Link>contacts</Link>
        </li>
        <li>
          <NavLink to="/login" className="">Login</NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar">
        <div className="flex-1">
          <img className="w-[120px] " src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    );
};

export default NavBar;