import { partnersConstants } from '../constants/partners';

const partners = (state = {}, action) => {
    switch (action.type) {
        case partnersConstants.CLI_LIST_REQUEST:
            return {
                loading: true
            };
        case partnersConstants.CLI_LIST_FAILURE:
            return { 
                error: action.error
            };
        case partnersConstants.CLI_LIST_SUCCESS:
            return {
                list: action.resp
            };
        case partnersConstants.CLI_TOP_REQUEST:
            return {
                loading: true
            };
        case partnersConstants.CLI_TOP_SUCCESS:
            return {
                topList: action.resp
            };
        case partnersConstants.CLI_TOP_FAILURE:
            return { 
                error: action.error
            };
        default:
            return state
    }
}

export default partners;