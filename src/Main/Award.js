import React, { Component } from "react";
import uniqid from "uniqid";

import NewGroup from "../Group/NewGroup";
import "../assets/css/Award.css";

class Award extends Component {
    constructor() {
        super();

        this.state = {
            awards: [
                {
                    id: uniqid(),
                    show: true,
                }
            ],
            numShownAwards: 1,
        };

        this.deleteAward = this.deleteAward.bind(this);
        this.addAward = this.addAward.bind(this);
    }

    deleteAward = (e) => {
        if (this.state.awards.length > 1) {
            const awardIDToDelete = e.target.classList[1];
            let newAwards = [];

            for (const award in this.state.awards) {
                if (Object.hasOwnProperty.call(this.state.awards, award)) {
                    const awardItem = this.state.awards[award];
                    if (awardItem.id == awardIDToDelete) {
                        awardItem.show = false;
                    }
                    newAwards.push(awardItem);
                }
            }

            this.setState({
                awards: newAwards,
                numShownAwards: this.state.numShownAwards - 1,
            });

            console.log(this.state.awards)
        }
    }

    addAward = (e) => {
        e.preventDefault();
        let newAwards = this.state.awards;
        newAwards.push({id: uniqid(),show:true});
        this.setState({
            awards: newAwards,
            numShownAwards: this.state.numShownAwards + 1,
        });
    }

    render() {
        return (
            <div className="award-container body-group">
                <div className="award-title group-title">
                    AWARDS
                </div>
                <div className="award-list">
                    {this.state.awards.map(award => {
                        return (
                            <div className={`award-item ${award.id}`} style={{display: award.show ? "flex" : "none"}}>
                                <NewGroup
                                    groupName={`award-item-members ${award.id}`}
                                    groupMembers={[
                                                    {
                                                        defaultName: "Award",
                                                        className: "award-name",
                                                        type: "text"
                                                    },{
                                                        defaultName: "Event",
                                                        className: "award-event",
                                                        type: "text"
                                                    },
                                                    {
                                                        defaultName: "Year",
                                                        className: "award-year",
                                                        type: "text"
                                                    },
                                                    {
                                                        defaultName: "Award Details",
                                                        className: "award-details",
                                                        type: "text"
                                                    },
                                                ]}
                                />
                                {this.state.numShownAwards > 1 ? 
                                    <button
                                        // style={{display: this.state.numShownSkills > 1 && skill.show ? "block" : "none"}}
                                        onClick={this.deleteAward} 
                                        className={`delete-award ${award.id} delete-button`}style={{fontSize: ".8rem", height:"inherit", padding:".2rem .4rem"}}>
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
                    onClick={this.addAward}
                    className="add-award-button add-button"
                    style={{fontSize: ".8rem", height:"inherit", padding:".4rem .4rem"}}>
                        Add Award</button>
            </div>
        );
    }
}

export default Award;