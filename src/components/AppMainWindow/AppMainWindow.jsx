import React from 'react';
import './AppMainWindow.scss';

import AppTrainingsList from "../AppTrainingsList/AppTrainingsList";

class AppMainWindow extends React.Component {
    render() {
        return (
            <div className = "appMainWindow">
                <AppTrainingsList events = {this.props.events} isAuthed = {true}/>
            </div>
        );
    }
}

export default AppMainWindow;