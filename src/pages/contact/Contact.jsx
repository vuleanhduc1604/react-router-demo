import React from 'react';
import { NavLink } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
            <NavLink to='/'>Homepage</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <main>Contact</main>
        </div>     
    );
};

export default Contact;