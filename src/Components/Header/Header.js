import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Header = () => {
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

export default Header;