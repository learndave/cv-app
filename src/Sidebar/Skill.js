import React, { Component} from "react";

import Editable from "../Fields/Editable";

class Skill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { skillName, skillLevel } = this.props;

        return (
            <div className="skill-item">
                <Editable
                    defaultName={skillName}
                    className={skillName}
                    type="text"
                />
            </div>
        );
    };
}

export default Skill;