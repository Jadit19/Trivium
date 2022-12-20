import React from "react";

import NavItem from "./nav_item";

import "./style.css";

function Navbar() {
    const hamOnClick = () => {
        document.querySelector(".nav__items").classList.toggle("open");
        document.querySelector(".ham").classList.toggle("cross");
    };

    return (
        <nav>
            <a href="/" className="nav__left">
                LOGO
            </a>

            <div className="nav__right">
                <div className="ham" onClick={hamOnClick}>
                    <div className="__upper"></div>
                    <div className="__middle"></div>
                    <div className="__lower"></div>
                </div>
                <div className="nav__items">
                    <NavItem text={"About Us"} link={"/about"} />
                    <NavItem text={"Gallery"} link={"/gallery"} />
                    <NavItem text={"Contact"} link={"/contact"} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;