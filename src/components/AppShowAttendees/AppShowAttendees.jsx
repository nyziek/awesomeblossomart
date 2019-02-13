import React from 'react';
import './AppShowAttendees.scss';
import AppShowAttendeesListItem from "../AppShowAttendeesListItem/AppShowAttendeesListItem";

import * as firebase from "firebase/app";
require("firebase/database");



class AppShowAttendees extends React.Component {

    state = {
        event: "",
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

    render() {

        if(this.state.loading) {
            return null
        }

        const noAttendees = <tr>
            <td colSpan="5"> Brak zarejestrowanych uczestników</td>
        </tr>;

        return (
            <div>
                <div className = "showAttendeesTrainingInfo">
                    <h2>{this.state.event.name}</h2>
                    <h3>Poziom: {this.state.event.level}</h3>
                    <h3>Miasto: {this.state.event.city}</h3>
                    <h3>Data: {this.state.event.date}</h3>
                </div>
                <table className = "attendeeList">
                    <thead>
                        <tr>
                            <th>IMIĘ</th>
                            <th>NAZWISKO</th>
                            <th>E-MAIL</th>
                            <th>TELEFON</th>
                            <th>ZAPŁACONO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.event.attendees
                            ? this.state.event.attendees.map((attendee, index) => (
                                <AppShowAttendeesListItem key = {index} attendee = {attendee}/>
                            ))
                            : noAttendees
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AppShowAttendees;