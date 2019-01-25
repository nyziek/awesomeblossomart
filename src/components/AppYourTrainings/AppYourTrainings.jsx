import React from 'react';
import './AppYourTrainings.scss';

import AppYourTrainingsListItem from "../AppYourTrainingsListItem/AppYourTrainingsListItem";
import * as firebase from "firebase/app";
require("firebase/database");

class AppYourTrainings extends React.Component {

    state = {
        events: []
    };

    componentDidMount() {
        firebase.database().ref("/events").on("value", res => {
            const data = res.val();

            console.log(data);

            const items = [];

            for(let key in data) {
                items.push(data[key])
            }

            this.setState({
                events: items
            });

            console.log(items);
        })
    }

    render() {
        return (
            <table className = "trainingsList">
                <thead>
                    <tr>
                        <th>MIASTO</th>
                        <th>TERMIN</th>
                        <th>POZIOM</th>
                        <th className = "trainingDescriptionHeader">OPIS</th>
                        <th>UCZESTNICY</th>
                        <th>EDYTUJ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.events.map((event, index) => (
                            <AppYourTrainingsListItem key = {index} event = {event}/>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default AppYourTrainings;