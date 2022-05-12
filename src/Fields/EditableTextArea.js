import React, { Component } from "react";

class EditableTextArea extends Component {
    constructor(props) {
        super(props);

        const { defaultName } = this.props;

        this.state = {
            textValue: defaultName,
            inEditMode: false,
            hasChangedfromDefault: false,
            textWidth: defaultName.length,
        }

        this.handleInputChange.bind(this);
        this.doneEditing.bind(this);
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            textValue: e.target.value,
            inEditMode: true,
            hasChangedfromDefault: true,
            textWidth: e.target.value.length,
        });
    }

    doneEditing = (e) => {
        e.preventDefault();
        
        let newValue = this.state.textValue;
        
        // solve empty input
        if (newValue == "") {
            newValue = this.props.defaultName; 
        }

        this.setState({
            textValue: newValue,
            inEditMode: false,
            hasChangedfromDefault: this.state.hasChangedfromDefault,
            textWidth: newValue.length,
        });
    }

    startEditing = (e) => {
        e.preventDefault();
        this.setState({
            textValue: this.state.textValue,
            inEditMode: true,
            hasChangedfromDefault: this.state.hasChangedfromDefault,
            textWidth: this.state.textWidth,
        });
    }

    render() {
        const { className, defaultName, type } = this.props;
        return (
            <div className={`${className} editable-container`}>
                <div
                    onClick={this.startEditing}
                    className={`${className} editable-text`}
                    style={{opacity: this.state.inEditMode ? "0" : "1", 
                            position: this.state.inEditMode ? "absolute" : "relative"}}>
                    {this.state.textValue}
                </div>
                <div style={{opacity: this.state.inEditMode ? "1" : "0",
                            position: this.state.inEditMode ? "relative" : "absolute"}}>
                    <form>
                        <textarea
                            type={type}
                            className={`${className} editable-input`}
                            onChange={this.handleInputChange}
                            defaultValue={this.state.hasChangedfromDefault ? this.state.textValue : ""}
                            placeholder={defaultName}
                            style={{width: `100%`, /*resize: "none"*/}}
                            required
                        />
                        <button 
                            onClick={this.doneEditing}
                            className={`${className} editable-done-button`}
                            style={{fontSize: ".8rem", height:"inherit", padding:".1rem .2rem"}}>
                            Done
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditableTextArea;