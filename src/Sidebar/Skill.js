import React, { Component} from "react";

import Editable from "../Fields/Editable";

class Skill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { skillID, show } = this.props;
        
        return (
            <Editable
                defaultName="Skill"
                className={`skill ${skillID}`}
                type="text"
            />
        );
    };
}

export default Skill;