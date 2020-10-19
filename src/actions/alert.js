import { alertConstants } from '../constants/alert';

export const alertActions = {
    success,
    info,
    warning,
    error,
    clear,
};

function success(message) {
    return {
        type: alertConstants.SUCCESS, 
        message: message 
    }
}

function info(message) {
    return {
        type: alertConstants.INFO, 
        message: message 
    }
}

function warning(message) {
    return {
        type: alertConstants.WARNING, 
        message: message 
    }
}

function error(message) {
    return {
        type: alertConstants.ERROR, 
        message: message 
    }
}

function clear() {
    return {
        type: alertConstants.INFO, 
        message: '' 
    }
}