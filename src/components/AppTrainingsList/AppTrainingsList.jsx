import React from 'react';
import './AppTrainingsList.scss';

import AppTrainingsListItem from "../AppTrainingsListItem/AppTrainingsListItem";

class AppTrainingsList extends React.Component {
    render() {
        return (
            <table className = "trainingsList">
                <thead>
                    <tr>
                        <th>MIASTO</th>
                        <th>TERMIN</th>
                        <th>POZIOM</th>
                        <th className = "trainingDescriptionHeader">OPIS</th>
                        <th>UCZESTNIKÓW</th>
                        <th>DOŁĄCZ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.events.map((event, index) => (
                            <AppTrainingsListItem key = {index} event = {event}/>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default AppTrainingsList;