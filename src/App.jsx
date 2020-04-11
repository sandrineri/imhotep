import React from 'react';
import { Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Ads from './routes/Ads';
import Welcome from './routes/Welcome';
import history from './utils/history';

const App = () => {
    return (
        <Router history={history}>
            <Route path="/" exact render={(props => <Welcome {...props} />)} />
            <PrivateRoute path="/ads" render={(props => <Ads {...props} />)} />
        </Router>
    )
}

export default App;