import React from "react";

import Editable from "../Fields/Editable";
import EditableTextArea from "../Fields/EditableTextArea";

const Profile = () => {
    return (
        <div className="profile-container body-group">
            <div className="profile-title group-title">
                PROFILE
            </div>
            <EditableTextArea
                defaultName=
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Massa id neque aliquam vestibulum morbi blandit cursus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Proin sagittis nisl rhoncus mattis rhoncus.`}
                className="profile-summary"
                type="text"
            />
        </div>
    );
}

export default Profile;