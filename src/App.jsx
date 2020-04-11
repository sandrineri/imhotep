import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//import PrivateRoute from './components/PrivateRoute';
import Ads from './routes/Ads';
//import Welcome from './routes/Welcome';
import history from './utils/history';

const App = () => (
        <Router history={history}>
            <Switch>
                {/* <Route path="/" exact render={(props => <Welcome {...props} />)} /> */}
                <Route path="/" render={(props => <Ads {...props} />)} />
            </Switch>
        </Router>
    );

export default App;
