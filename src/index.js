// import des feuilles de style en SASS (scss)
import './css/style.scss';
import './css/layout.scss';

// import du framework React et de sa plateforme web ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// import du module jsx principal
import App from './App';

// Rendu des éléments React dans le DOM
ReactDOM.render(<App />, document.getElementById('immobilier'));