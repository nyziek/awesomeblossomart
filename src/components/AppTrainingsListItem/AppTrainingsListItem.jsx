import React from 'react';
import './AppTrainingsListItem.scss';

import {
    Link
} from 'react-router-dom'

class AppTrainingsListItem extends React.Component {

    handleTrainingDescriptionInfoShow = (event) => {

        if(event.target.className.includes("clicked")) {
            event.target.parentElement.nextElementSibling.style.display = "none";
            event.target.classList.remove("clicked");
        } else {
            event.target.parentElement.nextElementSibling.style.display = "block";
            event.target.classList.add("clicked");
        }
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
                    {!this.props.event.attendees
                        ? "0"
                        : this.props.event.attendees.length
                    } / {this.props.event.maxAttendees}
                </td>
                <td className = "joinTrainingButtonHolder">
                    <Link to = {`/join/${this.props.event.id}`}>
                        <i className = "fas fa-plus-circle"></i>
                    </Link>
                </td>
            </tr>
        );
    }
}

export default AppTrainingsListItem;