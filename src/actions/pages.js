import { pagesConstants } from '../constants/pages';
import { pagesService } from '../services/pages';
import { alertActions } from '../actions/alert';
import Logout from '../helpers/logout'

export const pagesActions = {
    getPages,
    getPage,
    createPage,
    updatePage,
    deletePage
};

function getPages(){
    return dispatch => {
        dispatch(request(true));

        pagesService.pagesList().then(
            response => {
                if (response.error) {
                    dispatch(failure(response.error.toString()));
                    dispatch(alertActions.error(response.error));
                    window.setTimeout(() => Logout(), 2000);
                    return;
                } 
                dispatch(success(response))
            },
            error => dispatch(failure(error.toString()))
        )
    };

    function request(req) {return { type: pagesConstants.PAGES_LIST_REQUEST, req }}
    function success(resp) {return { type: pagesConstants.PAGES_LIST_SUCCESS, resp }}
    function failure(error) {return { type: pagesConstants.PAGES_LIST_FAILURE, error }}

}

function getPage(id){
    return dispatch => {
        dispatch(request(true));

        pagesService.pages(id).then(
            response => dispatch(success(response)),
            error => dispatch(failure(error.toString())),
        )
    };

    function request(req) {return { type: pagesConstants.PAGES_SGL_REQUEST, req }}
    function success(resp) {return { type: pagesConstants.PAGES_SGL_SUCCESS, resp }}
    function failure(error) {return { type: pagesConstants.PAGES_SGL_FAILURE, error }}
}


function createPage(pageData){
    return dispatch => {
        dispatch(request(true));

        pagesService.createPage(pageData).then(
            response => dispatch(success(response)),
            error => dispatch(failure(error.toString()))
        )
    };

    function request(req) {return { type: pagesConstants.PAGES_CREATE_REQUEST, req }}
    function success(resp) {return { type: pagesConstants.PAGES_CREATE_SUCCESS, resp }}
    function failure(error) {return { type: pagesConstants.PAGES_CREATE_FAILURE, error }}

}

function updatePage(pageData){
    return dispatch => {
        dispatch(request(true));

        pagesService.updatePage(pageData).then(
            response => dispatch(success(response)),
            error => dispatch(failure(error.toString()))
        )
    };

    function request(req) {return { type: pagesConstants.PAGES_UPDT_REQUEST, req }}
    function success(resp) {return { type: pagesConstants.PAGES_UPDT_SUCCESS, resp }}
    function failure(error) {return { type: pagesConstants.PAGES_UPDT_FAILURE, error }}

}

function deletePage(id){
    return dispatch => {
        dispatch(request(true));

        pagesService.deletePage(id).then(
            response => dispatch(success(response)),
            error => dispatch(failure(error.toString()))
        )
    };

    function request(req) {return { type: pagesConstants.PAGES_DLT_REQUEST, req }}
    function success(resp) {return { type: pagesConstants.PAGES_DLT_SUCCESS, resp }}
    function failure(error) {return { type: pagesConstants.PAGES_DLT_FAILURE, error }}
}