import React from 'react';
import './AppTrainingsList.scss';

import AppTrainingsListItem from "../AppTrainingsListItem/AppTrainingsListItem";
import * as firebase from "firebase/app";
require("firebase/database");

class AppTrainingsList extends React.Component {

    state = {
        events: []
    };

    componentDidMount() {
        firebase.database().ref("/events").on("value", res => {
            const data = res.val();

            const items = [];

            for(let key in data) {
                const obj = data[key];
                obj.id = key;

                items.push(obj)
            }

            this.setState({
                events: items
            });

            console.log(this.state.events)
        });
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
                        <th>DOŁĄCZ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.events.map((event, index) => (
                            <AppTrainingsListItem key = {index} event = {event}/>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default AppTrainingsList;