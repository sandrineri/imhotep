import React, { useState } from 'react';
import { useAuth0 } from '../auth/Auth0Wrapper';

import Connect from '../components/Connect';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Welcome = () => {
    const [accessToken, setAccessToken] = useState(null);

    // Authorization
    const { isAuthenticated, getTokenSilently } = useAuth0();
    if (isAuthenticated) {
        getTokenSilently().then(token => {
            setAccessToken(token);
            console.log('token: ', token);
        });
    }

    return (
        <React.Fragment>
            <div>
                <Connect accessToken={accessToken} setAccessToken={setAccessToken} />
                <Header setAccessToken={setAccessToken} accessToken={accessToken} />
            </div>

            <div className="home">
                {/* <div className={`${isAuthenticated ? 'display-flex' : 'display-none'}`}>
                    <Link to="/ads">
                        <button type="button" >
                            Chercher
                        </button>
                    </Link>
                </div> */}
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Welcome;
