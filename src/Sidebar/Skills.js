import React, { Component } from "react";

// import Editable from "../Fields/Editable";
import Skill from "./Skill";


class Skills extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="skills-container">
                <div className="skills-title">
                    SKILLS
                </div>
                <Skill SkillName/>
            </div>
        );
    }
}

export default Skills;