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
        paid: false
    };

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

        console.log(newAttendee);
        console.log(firebase.database().ref('/events/'));

        //firebase.database().ref('/events').push(newAttendee).then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <form className = "addTrainingForm">

                {console.log(this.props.match.params.id)}

                <div className = "addTrainingFormContent">
                    <div className = "trainingInfo">
                        <h2>{this.props.match.params.name}</h2>
                        <h3>Poziom: {this.props.match.params.level}</h3>
                        <h3>Miasto: {this.props.match.params.city}</h3>
                        <h3>Data: {this.props.match.params.data}</h3>
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