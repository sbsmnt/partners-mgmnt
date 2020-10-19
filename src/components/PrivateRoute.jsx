import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (    
    <Route {...rest} render={ props => {
        // check user status and role
        const user = localStorage.getItem('user') ? 
            JSON.parse(localStorage.getItem('user')) : {};

        const roleAgent = user && user.roles && user.roles[5] ?
            user.roles[5] : '';

        return roleAgent ? 
            <Component {...props} /> : 
            <Redirect to={
                { pathname: `/login`, state: { from: props.location } }
            } />
        }
    } />
);

export default PrivateRoute;