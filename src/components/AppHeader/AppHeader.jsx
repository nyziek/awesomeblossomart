import React from 'react';
import './AppHeader.scss';

import appLogo from  '../../assets/logo_teal_rect.png';

class AppHeader extends React.Component {
    render() {
        return (
            <header className = "appHeader">
                <div className = "appLogoHolder">
                    <img id = "appLogo" src = {appLogo} alt = "App Logo"/>
                </div>
                <div className = "appTopBar">
                    <h1>SZKOLENIA FACE PAINTING</h1>
                </div>
            </header>
        );
    }
}

export default AppHeader;