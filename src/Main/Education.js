import React, { Component } from "react";
import uniqid from "uniqid";

import NewGroup from "../Group/NewGroup";
import "../assets/css/Education.css";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            educations: [
                {
                    id: uniqid(),
                    show: true,
                }
            ],
            numShownEducations: 1,
        };

        this.deleteEducation = this.deleteEducation.bind(this);
        this.addEducation = this.addEducation.bind(this);
    }

    deleteEducation = (e) => {
        if (this.state.educations.length > 1) {
            const educationIDToDelete = e.target.classList[1];
            let newEducations = [];

            for (const education in this.state.educations) {
                if (Object.hasOwnProperty.call(this.state.educations, education)) {
                    const educationItem = this.state.educations[education];
                    if (educationItem.id == educationIDToDelete) {
                        educationItem.show = false;
                    }
                    newEducations.push(educationItem);
                }
            }

            this.setState({
                educations: newEducations,
                numShownEducations: this.state.numShownEducations - 1,
            });

            console.log(this.state.educations)
        }
    }

    addEducation = (e) => {
        e.preventDefault();
        let newEducations = this.state.educations;
        newEducations.push({id: uniqid(),show:true});
        this.setState({
            educations: newEducations,
            numShownEducations: this.state.numShownEducations + 1,
        });
    }

    render() {
        return (
            <div className="education-container body-group">
                <div className="education-title group-title">
                    EDUCATION
                </div>
                <div className="education-list">
                    {this.state.educations.map(education => {
                        return (
                            <div className={`education-item ${education.id}`} style={{display: education.show ? "flex" : "none"}}>
                                <NewGroup
                                    groupName={`education-item-members ${education.id}`}
                                    groupMembers={[
                                                    {
                                                        defaultName: "School",
                                                        className: "school",
                                                        type: "text"
                                                    },
                                                    {
                                                        defaultName: "Year",
                                                        className: "education-year",
                                                        type: "text"
                                                    },
                                                    {
                                                        defaultName: "Degree",
                                                        className: "degree",
                                                        type: "text"
                                                    },
                                                ]}
                                />
                                {this.state.numShownEducations > 1 ? 
                                    <button
                                        // style={{display: this.state.numShownSkills > 1 && skill.show ? "block" : "none"}}
                                        onClick={this.deleteEducation} 
                                        className={`delete-education ${education.id} delete-button`}style={{fontSize: ".8rem", height:"inherit", padding:".2rem .4rem"}}>
                                        Delete
                                    </button> :
                                    <div className="hidden">

                                    </div>
                                }
                            </div>
                        )
                })}
                </div>
                <button
                    onClick={this.addEducation}
                    className="add-education-button add-button"
                    style={{fontSize: ".8rem", height:"inherit", padding:".4rem .4rem"}}>
                        Add Education</button>
            </div>
        );
    }
}

export default Education;