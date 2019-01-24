import React from 'react';
import './App.scss';

import AppHeader from "../AppHeader/AppHeader";
import AppWindow from "../AppWindow/AppWindow";

import * as firebase from "firebase/app";
require('firebase/database');

class App extends React.Component {
    state = {
        events: []
    };

    componentDidMount() {
        firebase.database().ref("/events").on("child_added", res => {
            const data = res.val();

            this.setState({
                events: [...this.state.events, data]
            })
        })
    }

    render() {
        return (
            <div className = "App">
                <AppHeader/>
                <AppWindow events = {this.state.events}/>
            </div>
        );
    }
}

export default App;
