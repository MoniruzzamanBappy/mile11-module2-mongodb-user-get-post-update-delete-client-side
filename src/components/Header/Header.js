import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-cont'>
            <Link to='/'>Home</Link>
            <Link to='/user'>Add User</Link>
        </div>
    );
};

export default Header;