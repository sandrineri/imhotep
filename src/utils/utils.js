//import settings from '../config/settings';

// Si l'utilisateur est connecté
const displayIfAuthenticated = (accessToken) => (accessToken ? 'display-none' : 'display-flex');

// Style du header selon la page
const styleBgIfAuthenticated = (accessToken) => (accessToken ? 'bg-real-ads' : 'bg-welcome');

export {
    displayIfAuthenticated,
    styleBgIfAuthenticated
 };
