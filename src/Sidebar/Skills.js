import React, { Component } from "react";
import uniqid from "uniqid";

// import Editable from "../Fields/Editable";
import Skill from "./Skill";
import "../assets/css/Variables.css";
import "../assets/css/Skills.css";

class Skills extends Component {
    constructor() {
        super();

        this.state = {
            skills: [
                {
                    id: uniqid(),
                    show: true,
                }
            ],
            numShownSkills: 1,
        };

        this.deleteSkill = this.deleteSkill.bind(this);
    }

    deleteSkill = (e) => {
        if (this.state.skills.length > 1) {
            const skillIDToDelete = e.target.classList[1];
            let newSkills = [];

            for (const skill in this.state.skills) {
                if (Object.hasOwnProperty.call(this.state.skills, skill)) {
                    const skillItem = this.state.skills[skill];
                    if (skillItem.id == skillIDToDelete) {
                        skillItem.show = false;
                    }
                    newSkills.push(skillItem);
                }
            }

            this.setState({
                skills: newSkills,
                numShownSkills: this.state.numShownSkills - 1,
            });

            console.log(this.state.skills)
        }
    }

    addSkill = (e) => {
        e.preventDefault();
        let newSkills = this.state.skills;
        newSkills.push({id: uniqid(),show:true});
        this.setState({
            skills: newSkills,
            numShownSkills: this.state.numShownSkills + 1,
        });
    }

    render() {
        return (
            <div className="skills-container body-group">
                <div className="skills-title group-title">
                    SKILLS
                </div>
                <div className="skill-list">
                {this.state.skills.map(skill => {
                    return (
                        <div className={`skill-item ${skill.id}`} style={{display: skill.show ? "flex" : "none"}}>
                            <Skill skillID={skill.id}/>
                            {this.state.numShownSkills > 1 ? 
                                <button
                                    // style={{display: this.state.numShownSkills > 1 && skill.show ? "block" : "none"}}
                                    onClick={this.deleteSkill} 
                                    className={`delete-skill ${skill.id} delete-button`}
                                    style={{fontSize: ".8rem", height:"inherit", padding:".1rem .2rem"}}>
                                    Delete
                                </button> :
                                <div className="hidden">

                                </div>
                            }
                        </div>
                    )
                })}
                <button 
                    onClick={this.addSkill}
                    className="add-skill-button add-button"
                    style={{fontSize: ".8rem", height:"inherit", padding:".4rem .4rem"}}>
                    Add Skill</button>
                </div>
            </div>
        );
    }
}

export default Skills;