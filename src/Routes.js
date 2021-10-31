import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { InicialPage } from './pages/InicialPage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home'
import { BarberServices } from './pages/BarberServices';

import PrivateHome from './private/PrivateHome.tsx'
import PrivateRedirectToHome from './private/PrivateLogin.tsx'

export function Routes() {

    return (

        <Router>
            <Switch>
                <PrivateRedirectToHome exact path="/" component={InicialPage} />
                <PrivateRedirectToHome exact path="/login" component={Login} />
                <PrivateRedirectToHome exact path="/register" component={Register} />
                <PrivateHome exact path="/home" component={Home} />
                <Route exact path="/services/:id" component={BarberServices} />
            </Switch>
        </Router>
    )
}

