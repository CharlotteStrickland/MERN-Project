import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo'
                src='./components/images/airbnb-logo.jpeg' alt="" />
            </Link>
        <div className='header_center'>
            <input type="text" />
            <SearchIcon />
        </div>
        <div className='header_right'>
            <p>Become a Host Today</p>
            <LanguageIcon />
            <FavoritesIcon />
        </div>
        </div>
    )
}

export default Header;