import React, { Component } from "react";

import Profile from "./Profile";
import Skills from "./Skills";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <Profile />
                <Skills />
            </div>
        )
    };
}

export default Sidebar;