import React from 'react';
import './AppEditTrainingForm.scss';

import * as firebase from "firebase/app";
require("firebase/database");

class AppEditTrainingForm extends React.Component {

    state = {
        event: null,
        loading: true
    };

    componentDidMount() {

        firebase.database().ref(`events/${this.props.match.params.id}`).on("value", res => {
            const data = res.val();

            console.log(data);

            this.setState({
                event: data,
                attendees: data.attendees,
                name: data.name,
                city: data.city,
                date: data.date,
                maxAttendees: data.maxAttendees,
                level: data.level,
                descriptionShort: data.descriptionShort,
                descriptionFull: data.descriptionFull,
                loading: false
            });
        });
    }

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

        const editedEvent = {
            attendees: this.state.attendees,
            name: this.state.name,
            city: this.state.city,
            date: this.state.date,
            maxAttendees: this.state.maxAttendees,
            level: this.state.level,
            descriptionShort: this.state.descriptionShort,
            descriptionFull: this.state.descriptionFull
        };

        console.log(this.props.match.params.id);
        console.log(firebase.database().ref('/events').child(this.props.match.params.id));

        firebase.database().ref('/events').child(this.props.match.params.id).update(editedEvent).then(() => this.props.history.push('/your-trainings'));
    };

    render() {

        if(this.state.loading) {
            return null
        }

        return (
            <form className = "addTrainingForm">
                <div className = "addTrainingFormContent">
                    <div>
                        <label htmlFor = "trainingName">Nazwa: </label>
                        <input id = "trainingName" type = "text" defaultValue = {this.state.event.name} onChange = {this.handleNameChange}/>
                    </div>
                    <div>
                        <label htmlFor = "trainingCity">Miasto: </label>
                        <input id = "trainingCity" type = "text" defaultValue = {this.state.event.city} onChange = {this.handleCityChange}/>
                    </div>
                    <div>
                        <label htmlFor = "trainingDate">Data: </label>
                        <input id = "trainingDate" type = "date" defaultValue = {this.state.event.date} onChange = {this.handleDateChange}/>
                    </div>
                    <div>
                        <label htmlFor = "trainingMaxAttendees">Max. uczestników: </label>
                        <input id = "trainingMaxAttendees" type = "number" defaultValue = {this.state.event.maxAttendees}  onChange = {this.handleMaxAttendeesChange}/>
                    </div>
                    <div>
                        <label htmlFor = "trainingLevel">Poziom: </label>
                        <select id = "trainingLevel" defaultValue = {this.state.event.level} onChange = {this.handleLevelChange}>
                            <option>Podstawowy</option>
                            <option>Zaawansowany</option>
                        </select>
                    </div>
                    <div className = "trainingShortDescriptionForm">
                        <label htmlFor = "trainingDescriptionShort">Skrócony opis: </label>
                        <input id = "trainingDescriptionShort" type = "text" defaultValue = {this.state.event.descriptionShort} onChange = {this.handleShortDescriptionChange}/>
                    </div>
                    <div className = "trainingFullDescriptionForm">
                        <label htmlFor = "trainingDescriptionFull">Pełny opis: </label>
                        <textarea id = "trainingDescriptionFull" defaultValue = {this.state.event.descriptionFull} onChange = {this.handleFullDescriptionChange}/>
                    </div>
                    <button type = "submit" onClick = {this.handleSubmitButtonClick}>ZAPISZ SZKOLENIE</button>
                </div>
            </form>
        );
    }
}

export default AppEditTrainingForm;