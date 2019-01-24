import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App/App';

import * as firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyCzfi9KqtPDj_itzIDdbYSaNFl1Axent_s",
    authDomain: "awesomeblossomart.firebaseapp.com",
    databaseURL: "https://awesomeblossomart.firebaseio.com",
    projectId: "awesomeblossomart",
    storageBucket: "awesomeblossomart.appspot.com",
    messagingSenderId: "705293897375"
};

firebase.initializeApp(config);

ReactDOM.render(<App/>, document.getElementById('root'));
