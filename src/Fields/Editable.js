import React, { Component } from "react";
import { useEffect , useRef, useState } from "react";

class Editable extends Component {
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
            textWidth: this.state.textWidth,
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
                    style={{display: this.state.inEditMode ? "none" : "block"}}>
                    {this.state.textValue}
                </div>
                <div style={{display: this.state.inEditMode ? "block" : "none"}}>
                    <input
                        type={type}
                        className={`${className} editable-input`}
                        onChange={this.handleInputChange}
                        defaultValue={this.state.hasChangedfromDefault ? this.state.textValue : ""}
                        placeholder={defaultName}
                        style={{width: `${this.state.textWidth + 1}ch`, marginRight: "-1ch"}}
                        required
                    />
                    <button 
                        onClick={this.doneEditing}
                        className={`${className} editable-done-button`}
                        style={{fontSize: "10px"}}>
                        Done
                    </button>
                </div>
            </div>
        );
    }
}

export default Editable;