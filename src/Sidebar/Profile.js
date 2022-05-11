import React from "react";

import Editable from "../Fields/Editable";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-title">
                PROFILE
            </div>
            <Editable 
                defaultName="Profile Summary"
                className="profile-summary"
                type="text"
            />
        </div>
    );
}

export default Profile;