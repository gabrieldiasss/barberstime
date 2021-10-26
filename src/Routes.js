import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './components/home';
import { Login } from './components/Login';
import { Register } from './components/Register';

export function Routes() {

    return (

        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    )
}

