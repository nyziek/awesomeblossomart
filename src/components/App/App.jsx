import React from 'react';
import './App.scss';

import AppHeader from "../AppHeader/AppHeader";
import AppWindow from "../AppWindow/AppWindow";

class App extends React.Component {
    render() {
        return (
            <div className = "App">
                <AppHeader/>
                <AppWindow/>
            </div>
        );
    }
}

export default App;

