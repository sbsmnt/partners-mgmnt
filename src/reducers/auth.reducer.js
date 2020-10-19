import { authConstants } from '../constants/auth';

const user = localStorage.getItem('user') && localStorage.getItem('user').length > 0 ? 
    JSON.parse(localStorage.getItem('user')) : null;

if (!user) localStorage.removeItem('user');

const initialState = user ? { loggedIn: true, user } : {};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case authConstants.LOGIN_SUCCESS:
            action.user.token && localStorage.setItem('user', JSON.stringify(action.user));
            return {
                loggedIn: true,
                user: action.user
            };
        case authConstants.LOGIN_CONFIRM:
            return {
                loggedIn: true,
                user: state.user
            };
        case authConstants.LOGIN_CONFIRM_FAIL:
            return {
                loggedIn: false,
                error: action.error
            };
        case authConstants.LOGIN_FAILURE:
            return {};
        case authConstants.LOGOUT:
            return {};
        default:
            return state
    }
}

export default auth;