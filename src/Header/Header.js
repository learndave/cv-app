import React from "react";

import "../assets/css/Variables.css";
import "../assets/css/Header.css";
import Editable from "../Fields/Editable";

const Header = () => {
    return (
        <div className="header-container">
            {/* Main
                    Full Name
                    Position
                Details
                    Phone
                    Email
                    Website
                    Location */}
            <div className="main-details">
                <Editable
                    defaultName="Full Name"
                    className="full-name"
                    type="text"
                />
                <Editable
                    defaultName="Position"
                    className="position"
                    type="text"
                />
            </div>
            <div className="contact-details">
                <Editable
                    defaultName="Phone"
                    className="phone"
                    type="text"
                />
                <Editable
                    defaultName="Email"
                    className="email"
                    type="email"
                />
                <Editable
                    defaultName="Website"
                    className="website"
                    type="text"
                />
                <Editable
                    defaultName="Location"
                    className="location"
                    type="text"
                />
            </div>
        </div>
    )
}

export default Header;