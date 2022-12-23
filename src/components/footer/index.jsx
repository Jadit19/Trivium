import React from "react";

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./style.css";

const Footer = () => {
    return (
        <div className="footer__container">
            <footer>
                <div className="social__icons">
                    <a href="tel:+911204282845" target="_blank" rel="noreferrer">
                        <CallIcon />
                    </a>

                    <a href="mailto:info@trivium.co.in" target="_blank" rel="noreferrer">
                        <EmailIcon />
                    </a>

                    <a href="https://www.linkedin.com/company/trivium-power-engineers-pvt-ltd" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </a>
                </div>

                <div>
                    Trivium Power Engineers &middot; 2022
                </div>

                {/* <div>
                    Made with ❤️ by Web Division
                </div> */}
            </footer>
        </div>
    );
};

export default Footer;