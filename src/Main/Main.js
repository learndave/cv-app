import React from "react";

import Education from "./Education";
import Work from "./Work";
import Award from "./Award";
import "../assets/css/Main.css";


const Main = () => {
    // {Education}
    return (
        <div className="main-container">
            <Education />
            <Work />
            <Award />
        </div>
    )
}

export default Main;