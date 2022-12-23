import React from "react"

import "./style.css"
import "../style.css"

const Contact = () => {
    return (
        <>
            <section>
                <h1>Contact</h1>
            </section>

            <div className="main__container">
                <h1>Where are we located?</h1>
                
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe title="GMap Location" class="gmap_iframe" width="100%" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;hl=en&amp;q=Trivium Power Engineers&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>

                <h1>We'd love to hear from you!</h1>
            </div>
        </>
    );
};

export default Contact;