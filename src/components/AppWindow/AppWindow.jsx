import React from 'react';
import './AppWindow.scss';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import AppNav from "../AppNav/AppNav";
import AppYourTrainings from "../AppYourTrainings/AppYourTrainings";
import AppAddTrainingForm from "../AppAddTrainingForm/AppAddTrainingForm";
import AppTrainingsList from "../AppTrainingsList/AppTrainingsList";
import AppJoinTrainingForm from "../AppJoinTrainingForm/AppJoinTrainingForm";
import AppShowAttendees from "../AppShowAttendees/AppShowAttendees";

class AppWindow extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className = "appWindow">
                    <AppNav/>
                    <div className = "appMainWindow">
                        <Switch>
                            <Route exact path = "/" component = {AppTrainingsList}/>
                            <Route path = "/your-trainings" component = {AppYourTrainings}/>
                            <Route path = "/add-training" component = {AppAddTrainingForm}/>
                            <Route path = "/join/:id" component = {AppJoinTrainingForm}/>
                            <Route path = "/attendees/:id" component = {AppShowAttendees}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default AppWindow;