import React, { Component } from "react";
import uniqid from "uniqid";

import NewGroup from "../Group/NewGroup";
import "../assets/css/Work.css";

class Work extends Component {
    constructor() {
        super();

        this.state = {
            works: [
                {
                    id: uniqid(),
                    show: true,
                }
            ],
            numShownWorks: 1,
        };

        this.deleteWork = this.deleteWork.bind(this);
        this.addWork = this.addWork.bind(this);
    }

    deleteWork = (e) => {
        if (this.state.works.length > 1) {
            const workIDToDelete = e.target.classList[1];
            let newWorks = [];

            for (const work in this.state.works) {
                if (Object.hasOwnProperty.call(this.state.works, work)) {
                    const workItem = this.state.works[work];
                    if (workItem.id == workIDToDelete) {
                        workItem.show = false;
                    }
                    newWorks.push(workItem);
                }
            }

            this.setState({
                works: newWorks,
                numShownWorks: this.state.numShownWorks - 1,
            });

            console.log(this.state.works)
        }
    }

    addWork = (e) => {
        e.preventDefault();
        let newWorks = this.state.works;
        newWorks.push({id: uniqid(),show:true});
        this.setState({
            works: newWorks,
            numShownWorks: this.state.numShownWorks + 1,
        });
    }

    render() {
        return (
            <div className="work-container body-group">
                <div className="work-title group-title">
                    WORK EXPERIENCE
                </div>
                <div className="work-list">
                    {this.state.works.map(work => {
                        return (
                            <div className={`work-item ${work.id}`} style={{display: work.show ? "flex" : "none"}}>
                                <NewGroup
                                    groupName={`work-item-members ${work.id}`}
                                    groupMembers={[
                                                    {
                                                        defaultName: "Job Title",
                                                        className: "job-title",
                                                        type: "text"
                                                    },{
                                                        defaultName: "Company",
                                                        className: "company",
                                                        type: "text"
                                                    },
                                                    {
                                                        defaultName: "Year",
                                                        className: "work-year",
                                                        type: "text"
                                                    },
                                                    {
                                                        defaultName: "Job Description",
                                                        className: "job-description",
                                                        type: "text"
                                                    },
                                                ]}
                                />
                                {this.state.numShownWorks > 1 ? 
                                    <button
                                        // style={{display: this.state.numShownSkills > 1 && skill.show ? "block" : "none"}}
                                        onClick={this.deleteWork} 
                                        className={`delete-work ${work.id} delete-button`}style={{fontSize: ".8rem", height:"inherit", padding:".2rem .4rem"}}>
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
                    onClick={this.addWork}
                    className="add-work-button add-button"
                    style={{fontSize: ".8rem", height:"inherit", padding:".4rem .4rem"}}>
                        Add Work</button>
            </div>
        );
    }
}

export default Work;