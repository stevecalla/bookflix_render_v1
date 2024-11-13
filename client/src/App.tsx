import React from 'react';
import Login from './components/login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
};

export default App;
