import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='text-xl text-center font-bold pt-6'>
                <Link className='nav-link' to="/">HOME</Link>
                <Link className='nav-link' to="/reviews">REVIEWS</Link>
                <Link className='nav-link' to="/blog">BLOG</Link>
                <Link className='nav-link' to="/dashboard">DASHBOARD</Link>
                <Link className='nav-link' to="/about">ABOUT</Link>
            </nav>
            <br />
        </div>
    );
};

export default Navbar;