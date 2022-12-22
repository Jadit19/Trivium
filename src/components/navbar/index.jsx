import React from "react";

import "./style.css";

function Navbar() {

    const handleClick = () => {
        document.querySelector(".nav__button").classList.toggle("open");
        document.querySelector(".nav__overlay").classList.toggle("open")
    };

    return (
        <>
            <nav>
                <div className="nav__button" onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </nav>

            <div className="nav__overlay">
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