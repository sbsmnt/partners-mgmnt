import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../actions/auth';
import LoginMaterial from './LoginMaterial';
import { Loading } from '../Utils';

import validateLoginInput from '../../helpers/validate-login';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
            submitted: false,
            error: {}
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value.trim() });        
        
        const userInp = name === 'username' ? value.trim() : '';
        const passInp = name === 'password' ? value.trim() : '';

        const valid = validateLoginInput(userInp, passInp);
        this.setState({ error: valid });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        
        if (!username && !password) return;
        this.props.login(username, password);
    }

    render() {
        const { loggingIn, loggedIn } = this.props;
        const { username, password, submitted } = this.state;

        return (
            <div>
                {loggedIn && <Redirect to="/" />}
                { loggingIn && <Loading /> }
                
                <LoginMaterial 
                    username={username} 
                    password={password}
                    error={this.state.error}
                    submitted={submitted}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange} />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const { loggingIn, loggedIn } = state.auth;
    return { loggingIn, loggedIn };
};

const actionCreators = {
    login: authActions.login,
    logout: authActions.logout
};

const connectedLogin = connect(mapStateToProps, actionCreators)(Login);
export { connectedLogin as Login };