import React from 'react';
import { useAuth0 } from '../auth/Auth0Wrapper';

import { displayIfAuthenticated, styleBgIfAuthenticated } from '../utils/utils';

const Header = (props) => {
    const { isAuthenticated, getTokenSilently } = useAuth0();
    if (isAuthenticated) {
        getTokenSilently().then(token => {
            props.setAccessToken(token);
        });
    }

    return (
            <header>
            <div className={`bg ${styleBgIfAuthenticated(props.accessToken)}`} />
                <div className={`title ${displayIfAuthenticated(props.accessToken)}`}>
                    <h1>Imhotep</h1>
                </div>
            </header>
    );
};

export default Header;
