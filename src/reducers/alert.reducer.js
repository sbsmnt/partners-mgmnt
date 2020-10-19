import { alertConstants } from '../constants/alert';

const initialState = {};

export const alert = (state = initialState, action) => {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.message,
            }
        case alertConstants.WARNING:
            return {
                type: 'warning',
                message: action.message,
            }
        case alertConstants.ERROR:
            return {
                type: 'error',
                message: action.message,
            }
        case alertConstants.INFO:
            return {
                type: 'info',
                message: action.message,
            }
        case alertConstants.CLEAR:
            return {}
        default:
            return state;
    }
}