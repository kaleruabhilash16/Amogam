import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">amogham </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/abt">About Us</Link>
      <Link to="/pages">Pages</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/Cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </div>
  </nav>
);

export default Navbar;
