import React from 'react';
import './AppShowAttendees.scss';
// import AppShowAttendeesListItem from "../AppShowAttendeesListItem/AppShowAttendeesListItem";

class AppShowAttendees extends React.Component {
    render() {
        return (
            <table className = "trainingsList">
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
                    <tr>
                        <td>Bubu</td>
                        <td>Miś</td>
                        <td>bubu@mis.com</td>
                        <td>666666666</td>
                        <td>Nie</td>
                    </tr>
                {/*{*/}
                    {/*this.state.events.map((event, index) => (*/}
                        {/*<AppYourTrainingsListItem key = {index} event = {event}/>*/}
                    {/*))*/}
                {/*}*/}
                </tbody>
            </table>
        );
    }
}

export default AppShowAttendees;