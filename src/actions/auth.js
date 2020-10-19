import { authConstants } from '../constants/auth';
import { authService } from '../services/auth';
import { alertActions } from '../actions/alert';


export const authActions = {
    login,
    loggedIn,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        authService.login(username, password)
            .then( user => { 
                if (user.error) {
                    dispatch(failure(user.error.toString()));
                    dispatch(alertActions.error(user.error));
                    return;
                } 
                dispatch(success(user));
            })
            .catch(error => {
                dispatch(failure(error.toString()));
                dispatch(
                    alertActions.error(error.toString())
                );
                
            });
    };

    function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}


function logout() {
    return dispatch => {
        authService.logout()
            .then(resp => dispatch({ type: authConstants.LOGOUT }));
    }
}

function loggedIn() {
    return dispatch => {
        authService.isLoggedIn()
            .then(resp => { 
                if(resp.error){
                    dispatch(failure(resp.error))
                    dispatch(alertActions.error(resp.error));
                    authService.logout()
                        .then(resp => dispatch({ type: authConstants.LOGOUT }));
                    return;
                }
                dispatch(confirm(resp.user));
            });
    };

    function confirm(user) { return { type: authConstants.LOGIN_CONFIRM, user } }
    function failure(error) { return { type: authConstants.LOGIN_CONFIRM_FAIL, error } }
}