import React from 'react';
import { NavLink } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <NavLink to='/'>Homepage</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <main>About</main>
        </div>     
    );
};

export default About;