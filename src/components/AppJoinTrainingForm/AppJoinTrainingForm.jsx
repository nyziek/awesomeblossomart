import React from 'react';
import './AppJoinTrainingForm.scss';

import * as firebase from "firebase/app";
require("firebase/database");

class AppJoinTrainingForm extends React.Component {

    state = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        paid: false,
        event: null,
        loading: true
    };

    componentDidMount() {

        firebase.database().ref(`events/${this.props.match.params.id}`).on("value", res => {
            const data = res.val();

            this.setState({
                event: data,
                loading: false
            });
        })
    }

    handleAttendeeNameChange = (event) => {

        this.setState({
            name: event.target.value
        });
    };

    handleAttendeeSurnameChange = (event) => {

        this.setState({
            surname: event.target.value
        });
    };

    handleAttendeeEmailChange = (event) => {

        this.setState({
            email: event.target.value
        });
    };

    handleAttendeePhoneChange = (event) => {

        this.setState({
            phone: event.target.value
        });
    };

    handleJoinButtonClick = (event) => {
        event.preventDefault();

        const newAttendee = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            phone: this.state.phone
        };

        const currentEvent = this.state.event;

        if(!currentEvent.attendees) {
            currentEvent.attendees = [];
        }

        currentEvent.attendees.push(newAttendee);

        firebase.database()
            .ref(`events/${this.props.match.params.id}`)
            .set(currentEvent)
            .then(() => this.props.history.push('/'));
    };

    render() {

        if(this.state.loading) {
            return null
        }

        return (
            <form className = "addTrainingForm">

                <div className = "addTrainingFormContent">
                    <div className = "trainingInfo">
                        <h2>{this.state.event.name}</h2>
                        <h3>Poziom: {this.state.event.level}</h3>
                        <h3>Miasto: {this.state.event.city}</h3>
                        <h3>Data: {this.state.event.date}</h3>
                    </div>
                    <div>
                        <label htmlFor = "attendeeName">Imię: </label>
                        <input id = "attendeeName" type = "text" onChange = {this.handleAttendeeNameChange}/>
                    </div>
                    <div>
                        <label htmlFor = "attendeeSurname">Nazwisko: </label>
                        <input id = "attendeeSurname" type = "text" onChange = {this.handleAttendeeSurnameChange}/>
                    </div>
                    <div>
                        <label htmlFor = "attendeeEmail">E-mail: </label>
                        <input id = "attendeeEmail" type = "text" onChange = {this.handleAttendeeEmailChange}/>
                    </div>
                    <div>
                        <label htmlFor = "attendeePhone">Telefon: </label>
                        <input id = "attendeePhone" type = "text" onChange = {this.handleAttendeePhoneChange}/>
                    </div>

                    <button type = "submit" onClick = {this.handleJoinButtonClick}>ZAREJESTRUJ SIĘ</button>
                </div>
            </form>
        );
    }
}

export default AppJoinTrainingForm;