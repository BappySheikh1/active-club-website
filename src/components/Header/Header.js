import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
             <h2>My Regular Club</h2>
            <div className='header-link'>
                <a href="/home">Home</a>
                <a href="/tutorial">Tutorial</a>
                <a href="/contact">Contact</a>
                <a href="about Me">About Me</a>
            </div>
        </div>
    );
};

export default Header;