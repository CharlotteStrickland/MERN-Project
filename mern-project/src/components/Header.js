import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className='header'>
                <img className='header_logo'
                src='https://www.flickr.com/gp/186598741@N08/6eer30c777' alt="airbnb logo" />
        <div className='header_center'>
            <input type="text" />
        </div>
        <div className='header_right'>
            <p>Become a Host Today</p>
        </div>
        </div>
    )
}

export default Header;