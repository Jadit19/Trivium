import React from "react";

function NavItem({ text, link }) {
    return (
        <div className="nav__item">
            <a href={ link }>
                { text }
            </a>
        </div>
    );
};

export default NavItem;