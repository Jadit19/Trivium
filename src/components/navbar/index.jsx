import React, { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import "./style.css";

function Navbar() {
    const [isDark, setIsDark] = useState(0);

    const handleNavClick = () => {
        document.querySelector(".nav__button").classList.toggle("open");
        document.querySelector(".nav__overlay").classList.toggle("open")
    };
    
    const handleThemeClick = () => {
        if (isDark)
            document.documentElement.className = "dark";
        else
            document.documentElement.className = "light";
        setIsDark(!isDark);
    };

    return (
        <>
            <nav>
                <div className="nav__button" onClick={handleNavClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>

            <div className="nav__overlay" onClick={handleThemeClick}>
                <div className="theme__container">
                    { isDark ? <DarkModeIcon /> : <LightModeIcon /> }
                </div>

                <div className="nav__container">
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Products</a>
                    <a href="/">Gallery</a>
                    <a href="/">Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;