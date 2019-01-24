import React from 'react';
import './AppAddTrainingForm.scss';

class AppAddTrainingForm extends React.Component {
    render() {
        return (
            <form className = "addTrainingForm">
                <div className = "addTrainingFormContent">
                    <div>
                        <label htmlFor = "trainingName">Nazwa: </label>
                        <input id = "trainingName" type = "text" defaultValue = "Szkolenie Face Painting"/>
                    </div>
                    <div>
                        <label htmlFor = "trainingCity">Miasto: </label>
                        <input id = "trainingCity" type = "text"/>
                    </div>
                    <div>
                        <label htmlFor = "trainingDate">Data: </label>
                        <input id = "trainingDate" type = "date"/>
                    </div>
                    <div>
                        <label htmlFor = "trainingMaxAttendees">Max. uczestników: </label>
                        <input id = "trainingMaxAttendees" type = "number" defaultValue = "10"/>
                    </div>
                    <div>
                        <label htmlFor = "trainingLevel">Poziom: </label>
                        <select>
                            <option>Podstawowy</option>
                            <option>Zaawansowany</option>
                        </select>
                    </div>
                    <div className = "trainingShortDescriptionForm">
                        <label htmlFor = "trainingDescriptionShort">Skrócony opis: </label>
                        <input id = "trainingDescriptionShort" type = "text"/>
                    </div>
                    <div className = "trainingFullDescriptionForm">
                        <label htmlFor = "trainingDescriptionFull">Pełny opis: </label>
                        <textarea id = "trainingDescriptionFull"/>
                    </div>
                    <button type = "submit">DODAJ SZKOLENIE</button>
                </div>
            </form>
        );
    }
}

export default AppAddTrainingForm;