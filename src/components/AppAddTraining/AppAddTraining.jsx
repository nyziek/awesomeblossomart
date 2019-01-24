import React from 'react';
import './AppAddTraining.scss';

import AppAddTrainingForm from "../AppAddTrainingForm/AppAddTrainingForm";

class AppAddTraining extends React.Component {
    render() {
        return (
            <div className = "appMainWindow">
                <AppAddTrainingForm/>
            </div>
        );
    }
}

export default AppAddTraining;