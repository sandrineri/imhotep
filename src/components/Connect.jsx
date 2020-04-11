import React from 'react';
import { useAuth0 } from '../auth/Auth0Wrapper';

const Connect = (props) => {
    // Authorization
    const {
        isAuthenticated, getTokenSilently, logout, loginWithPopup
    } = useAuth0();
    if (isAuthenticated) {
        getTokenSilently().then(token => {
            props.setAccessToken(token);
            //console.log('token: ', token);
        });
    }

    return (
        <nav>
            <div>
                <p className="nav-title">Imhotep
                    <span className="nav-sub">
                        Trouver un logement à Paris
                    </span>
                </p>
            </div>
            <div className="connect-container">
                <div className={`connect-btn ${isAuthenticated ? 'display-none' : 'display-flex'}`}>
                    <button type="button" onClick={loginWithPopup}>
                        Se connecter
                    </button>
                </div>
                <div className={`connect-btn ${isAuthenticated ? 'display-flex' : 'display-none'}`}>
                    <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>
                        Se déconnecter
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Connect;
