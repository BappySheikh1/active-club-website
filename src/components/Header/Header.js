import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faHamburger} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header-container'>
             <h2>
             <FontAwesomeIcon className='icon-dumble' icon={faHamburger} />
                My Regular Club
                </h2>
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