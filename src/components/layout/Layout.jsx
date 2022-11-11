import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
const Layout = () => {
    return (
        <div>
            <header>
                <div>Logo</div>
                <Navigation/>
            </header>
            <Outlet></Outlet>
            <footer>Footer</footer>
        </div>
    );
};

export default Layout;