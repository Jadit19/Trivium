import React, { useEffect } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import "./style.css";

function Navbar({ isDark, setIsDark }) {
    const handleNavClick = () => {
        document.querySelector(".nav__button").classList.toggle("open");
        document.querySelector(".nav__overlay").classList.toggle("open")
    };
    
    useEffect(() => {
        if (isDark)
            document.documentElement.className = "dark";
        else
            document.documentElement.className = "light";
    }, [isDark]);

    return (
        <>
            <nav>
                <div className="nav__button" onClick={handleNavClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>

            <div className="nav__overlay">
                <div className="theme__container" onClick={() => setIsDark(!isDark)}>
                    { isDark ? <DarkModeIcon /> : <LightModeIcon /> }
                </div>

                <div className="nav__container">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/products">Products</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;