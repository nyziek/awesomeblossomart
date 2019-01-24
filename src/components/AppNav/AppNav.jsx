import React from 'react';
import './AppNav.scss';
import {HashRouter, NavLink} from 'react-router-dom';

class AppNav extends React.Component {
    render() {

        const activeStyle = {
            background: "#83CCC9",
            color: "#0F5F5C"
        };

        return (
            <HashRouter>
                <nav className = "appNav">
                    <ul className = "appNavList">
                        <li className = "appNavItem appNavItemActive">
                            <NavLink exact to = "/" activeStyle = {activeStyle}>
                                <p>Dostępne szkolenia</p>
                            </NavLink>
                        </li>
                        <li className = "appNavItem">
                            <NavLink to = "/your-trainings" activeStyle = {activeStyle}>
                                <p>Twoje szkolenia</p>
                            </NavLink>
                        </li>
                        <li className = "appNavItem">
                            <NavLink to = "/add-training" activeStyle = {activeStyle}>
                                <p>Dodaj szkolenie</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </HashRouter>
        );
    }
}

export default AppNav;