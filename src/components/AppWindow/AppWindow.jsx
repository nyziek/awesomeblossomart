import React from 'react';
import './AppWindow.scss';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import AppNav from "../AppNav/AppNav";
import AppMainWindow from "../AppMainWindow/AppMainWindow";
import AppYourTrainings from "../AppYourTrainings/AppYourTrainings";
import AppAddTraining from "../AppAddTraining/AppAddTraining";

class AppWindow extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className = "appWindow">
                    <AppNav/>
                    <Switch>
                        <Route exact path = "/" render = {() =>
                            <AppMainWindow events = {this.props.events} isAuthed = {true}/>
                        }/>
                        <Route path = "/your-trainings" render = {() =>
                            <AppYourTrainings events = {this.props.events} isAuthed = {true}/>
                        }/>
                        <Route path = "/add-training" render = {() =>
                            <AppAddTraining events = {this.props.events} isAuthed = {true}/>
                        }/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default AppWindow;