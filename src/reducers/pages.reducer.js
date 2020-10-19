import { pagesConstants } from '../constants/pages';

const pages = (state = {}, action) => {
  switch (action.type) {
    case pagesConstants.PAGES_LIST_REQUEST:
        return {
            loading: true
        };
    case pagesConstants.PAGES_LIST_SUCCESS:
        return {
            items: action.resp
        };
    case pagesConstants.PAGES_LIST_FAILURE:
        return { 
            error: action.error
        };
    case pagesConstants.PAGE_REQUEST:
        return {
            loading: true
        };
    case pagesConstants.PAGE_SUCCESS:
        return {
            items: action.resp
        };
    case pagesConstants.PAGE_FAILURE:
        return { 
            error: action.error
        };
    case pagesConstants.PAGE_UPDT_REQUEST:
        return {
            loading: true
        };
    case pagesConstants.PAGE_UPDT_SUCCESS:
        return {
            items: action.resp
        };
    case pagesConstants.PAGE_UPDT_FAILURE:
        return { 
            error: action.error
        };
    case pagesConstants.PAGE_DLT_REQUEST:
        return {
            loading: true
        };
    case pagesConstants.PAGE_DLT_SUCCESS:
        return {
            items: action.resp
        };
    case pagesConstants.PAGE_DLT_FAILURE:
        return { 
            error: action.error
        };

    default:
        return state
  }
};

export default pages;