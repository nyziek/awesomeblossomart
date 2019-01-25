import React from 'react';
import './AppYourTrainingsListItem.scss';
import {Link} from "react-router-dom";

class AppYourTrainingsListItem extends React.Component {

    handleTrainingDescriptionInfoShow = (event) => {

        if(event.target.className.includes("clicked")) {
            event.target.parentElement.nextElementSibling.style.display = "none";
            event.target.classList.remove("clicked");
        } else {
            event.target.parentElement.nextElementSibling.style.display = "block";
            event.target.classList.add("clicked");
        }
    };

    handleTrainingDelete = (event) => {
        console.log("usuwam " + this.props.event.city);
    };

    render() {
        return (
            <tr>
                <td>{this.props.event.city}</td>
                <td>{this.props.event.date}</td>
                <td>{this.props.event.level}</td>
                <td>
                    <div className = "trainingDescription">
                        <div className = "trainingName">
                            {this.props.event.name}
                        </div>
                        <div className = "trainingShortDescription">
                            <span>
                                {this.props.event.descriptionShort}
                            </span>
                            <i className = "fas fa-info-circle" onClick = {this.handleTrainingDescriptionInfoShow}></i>
                        </div>
                        <span className = "trainingFullDescription">
                            {this.props.event.descriptionFull}
                        </span>
                    </div>
                </td>
                <td>
                    <div className = "trainingAttendees">
                        <span>
                            {!this.props.event.attendees
                                ? "0"
                                : this.props.event.attendees.length
                            } / {this.props.event.maxAttendees}
                        </span>
                        <Link to = {`/attendees/${this.props.event.id}`}>
                            <i className = "fas fa-search-plus"></i>
                        </Link>
                    </div>
                </td>
                <td>
                    <div className = "editTrainingButtonHolder">
                        <i className = "fas fa-edit"></i>
                        <i className = "far fa-trash-alt" onClick = {this.handleTrainingDelete}></i>
                    </div>
                </td>
            </tr>
        );
    }
}

export default AppYourTrainingsListItem;