import React from 'react';

import Home from '../../pages/site/home/Home';
import UserHome from '../../pages/site/home/UserHome';
import About from '../../pages/site/About';
import Contact from '../../pages/site/Contact';
import { Route, Switch } from 'react-router-dom';
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import { useSelector } from 'react-redux';

function SiteRoutes() {
    const { user } = useSelector((state) => state.auth);
    const homeComponent = () => {
        return user ? <UserHome /> : <Home />
    };
    const routes = [
        {
            exact: true,
            path: '/',
            component: homeComponent
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/contact',
            component: Contact
        },
    ]
    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route key={index} exact={route.exact} path={route.path} component={route.component} />
                ))
            }
        </Switch>
    )
}

export default SiteRoutes
