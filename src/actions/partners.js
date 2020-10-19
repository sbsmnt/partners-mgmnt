import { partnersConstants } from '../constants/partners';
import { partnerService } from '../services/partners';
import { alertActions } from '../actions/alert';
import Logout from '../helpers/logout'

export const partnersActions = {
    partnerList,
    partnerTop,
    topAllTime,
    topMonth,
    topLocal
};

function partnerList() {
    return dispatch => {
        dispatch(request(true));

        partnerService.partnerList()
        .then(
            response => {
                if(response.error){
                    dispatch( failure(response.error.toString()) );
                    dispatch(alertActions.error(response.error));
                    window.setTimeout(() => Logout(), 2000);
                    return;
                }
                dispatch(success(response));
            }
        )
        .catch(error => dispatch( failure(error.toString()) ))
    };

    function request(req) { return { type: partnersConstants.CLI_LIST_REQUEST, req }}
    function success(resp) { return { type: partnersConstants.CLI_LIST_SUCCESS, resp }}
    function failure(error) { return { type: partnersConstants.CLI_LIST_FAILURE, error }}
}

function partnerTop() {
    return dispatch => {
        dispatch(request(true));

        partnerService.topAll().then(
            response => dispatch(success(response)),
            error => dispatch(failure(error.toString()))
        )
    };

    function request(req) { return { type: partnersConstants.CLI_TOP_REQUEST, req }}
    function success(resp) { return { type: partnersConstants.CLI_TOP_SUCCESS, resp }}
    function failure(error) { return { type: partnersConstants.CLI_TOP_FAILURE, error }}
}


function topAllTime() {
    return dispatch => {
        dispatch(request(true));

        partnerService.topAllTime().then(
            response => dispatch(success(response)),
            error => dispatch(failure(error.toString()))
        )
    };

    function request(req) { return { type: partnersConstants.CLI_TOP_REQUEST, req }}
    function success(resp) { return { type: partnersConstants.CLI_TOP_SUCCESS, resp }}
    function failure(error) { return { type: partnersConstants.CLI_TOP_FAILURE, error }}
}

function topMonth() {
    return dispatch => {
        dispatch(request(true));

        partnerService.topMonth().then(
            response => dispatch(success(response)),
            error => dispatch(failure(error.toString()))
        )
    };

    function request(req) { return { type: partnersConstants.CLI_TOP_REQUEST, req }}
    function success(resp) { return { type: partnersConstants.CLI_TOP_SUCCESS, resp }}
    function failure(error) { return { type: partnersConstants.CLI_TOP_FAILURE, error }}
}

function topLocal() {
    return dispatch => {
        dispatch(request(true));

        partnerService.topLocal().then(
            response => dispatch(success(response)),
            error => dispatch(failure(error.toString()))
        )
    };

    function request(req) { return { type: partnersConstants.CLI_TOP_REQUEST, req }}
    function success(resp) { return { type: partnersConstants.CLI_TOP_SUCCESS, resp }}
    function failure(error) { return { type: partnersConstants.CLI_TOP_FAILURE, error }}
}