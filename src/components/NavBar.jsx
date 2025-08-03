import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';

const NavBar = () => {
  const {logoutUser, user} = useContext(AuthContext)

  const handleSignOUt = e =>{
    e.preventDefault;

    logoutUser()
    .then()
    .catch()
  }

    const logo = "/images/logo.png";
    const links = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Signup</Link>
        </li>
        <li>
          {user ? (
            <button onClick={handleSignOUt} className="btn btn-primary">
              signOut
            </button>
          ) : (
            <NavLink to="/login" className="">
              Login
            </NavLink>
          )}
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