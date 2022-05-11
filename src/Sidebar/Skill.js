import React, { Component} from "react";

import Editable from "../Fields/Editable";

class Skill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { skillID, show } = this.props;
        
        if (show) {
            return (
                <Editable
                    defaultName="Skill"
                    className={`skill ${skillID}`}
                    type="text"
                />
            );
        } else {
            return (<div></div>);
        }
    };
}

export default Skill;