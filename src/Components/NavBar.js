import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Book Search</Link>
        <Link to="/bookshelf">My Bookshelf</Link>
    </nav>
);

export default Navbar;
