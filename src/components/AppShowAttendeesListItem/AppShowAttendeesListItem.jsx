import React from 'react';
import './AppShowAttendeesListItem.scss';

class AppShowAttendeesListItem extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.attendee.name}</td>
                <td>{this.props.attendee.surname}</td>
                <td>{this.props.attendee.email}</td>
                <td>{this.props.attendee.phone}</td>
                <td>
                    {
                        this.props.attendee.paid === true
                            ? "Tak"
                            : "Nie"
                    }
                </td>
            </tr>
        );
    }
}

export default AppShowAttendeesListItem;