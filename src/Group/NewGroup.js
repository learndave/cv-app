import React, { Component } from "react";

import Editable from "../Fields/Editable";


class NewGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { groupName, groupMembers } = this.props;

        return(
            <div className={`${groupName}-container group`}>
                {groupMembers.map(task => {
                    return (
                        <Editable
                            defaultName={task.defaultName}
                            className={task.className}
                            type={task.type}
                        />
                    )
                })}
            </div>
        );
    }
}

export default NewGroup;