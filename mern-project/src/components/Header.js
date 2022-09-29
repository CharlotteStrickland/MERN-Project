import React from 'react';
import './Header.css';




function Header() {
    return (
        <div className='header'>
                <img className='header_logo'
                src="./mern-project/src/components/images/airbnb-logo.jpeg" alt="" />
        <div className='header_center'>
            <input type={Search} />
        </div>
        <div className='header_right'>
            <p>Become a Host Today</p>
        </div>
        </div>
    )
}

export default Header;