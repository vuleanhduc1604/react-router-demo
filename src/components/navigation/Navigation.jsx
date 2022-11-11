import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css'
const menu = [
    {
        path: "/",
        label: "Trang Chủ"
    },
    {
        path: "/about",
        label: "Giới thiệu"
    },
    {
        path: "/contact",
        label: "Liên hệ"
    },
];
const Navigation = () => {
    return (
        <nav className={styles.nav}>
            {
                menu.map((item) => (<NavLink key={item.path} to={item.path} children={item.label} className={({isActive}) => isActive ? styles.active : styles.link}/>))
            }
        </nav>
    );
};

export default Navigation;