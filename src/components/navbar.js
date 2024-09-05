import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">amogham</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/pages">Pages</Link>
      <Link to="/catalog">Catalog</Link>
    </div>
  </nav>
);

export default Navbar;