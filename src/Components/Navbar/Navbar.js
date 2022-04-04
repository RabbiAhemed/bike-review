import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <br />
        </div>
    );
};

export default Navbar;