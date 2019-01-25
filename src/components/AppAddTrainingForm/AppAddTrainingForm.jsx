import React from 'react';
import './AppAddTrainingForm.scss';

import * as firebase from "firebase/app";
require("firebase/database");

class AppAddTrainingForm extends React.Component {

    state = {
        attendees: [],
        name: "Szkolenie Face Painting",
        city: "",
        date: "",
        maxAttendees: 0,
        level: "Podstawowy",
        descriptionShort: "",
        descriptionFull: ""
    };

    handleNameChange = (event) => {

        this.setState({
            name: event.target.value
        });
    };

    handleCityChange = (event) => {

        this.setState({
            city: event.target.value
        });
    };

    handleDateChange = (event) => {

        this.setState({
            date: event.target.value
        });
    };

    handleMaxAttendeesChange = (event) => {

        this.setState({
            maxAttendees: event.target.value
        });
    };

    handleLevelChange = (event) => {

        this.setState({
            level: event.target.value
        });
    };

    handleShortDescriptionChange = (event) => {

        this.setState({
            descriptionShort: event.target.value
        });
    };

    handleFullDescriptionChange = (event) => {

        this.setState({
            descriptionFull: event.target.value
        });
    };

    handleSubmitButtonClick = (event) => {
        event.preventDefault();

        const newEvent = {
            attendees: this.state.attendees,
            name: this.state.name,
            city: this.state.city,
            date: this.state.date,
            maxAttendees: this.state.maxAttendees,
            level: this.state.level,
            descriptionShort: this.state.descriptionShort,
            descriptionFull: this.state.descriptionFull
        };

        firebase.database().ref('/events').push(newEvent).then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <form className = "addTrainingForm">
                <div className = "addTrainingFormContent">
                    <div>
                        <label htmlFor = "trainingName">Nazwa: </label>
                        <input id = "trainingName" type = "text" defaultValue = "Szkolenie Face Painting" onChange = {this.handleNameChange}/>
                    </div>
                    <div>
                        <label htmlFor = "trainingCity">Miasto: </label>
                        <input id = "trainingCity" type = "text" onChange = {this.handleCityChange}/>
                    </div>
                    <div>
                        <label htmlFor = "trainingDate">Data: </label>
                        <input id = "trainingDate" type = "date" onChange = {this.handleDateChange}/>
                    </div>
                    <div>
                        <label htmlFor = "trainingMaxAttendees">Max. uczestników: </label>
                        <input id = "trainingMaxAttendees" type = "number" defaultValue = "10"  onChange = {this.handleMaxAttendeesChange}/>
                    </div>
                    <div>
                        <label htmlFor = "trainingLevel">Poziom: </label>
                        <select id = "trainingLevel" onChange = {this.handleLevelChange}>
                            <option>Podstawowy</option>
                            <option>Zaawansowany</option>
                        </select>
                    </div>
                    <div className = "trainingShortDescriptionForm">
                        <label htmlFor = "trainingDescriptionShort">Skrócony opis: </label>
                        <input id = "trainingDescriptionShort" type = "text" onChange = {this.handleShortDescriptionChange}/>
                    </div>
                    <div className = "trainingFullDescriptionForm">
                        <label htmlFor = "trainingDescriptionFull">Pełny opis: </label>
                        <textarea id = "trainingDescriptionFull" onChange = {this.handleFullDescriptionChange}/>
                    </div>
                    <button type = "submit" onClick = {this.handleSubmitButtonClick}>DODAJ SZKOLENIE</button>
                </div>
            </form>
        );
    }
}

export default AppAddTrainingForm;