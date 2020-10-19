import { partnertsConstants } from '../constants/partners';
import { authConstants } from '../constants/auth';
import partners from '../reducers/partners.reducer';
import auth from '../reducers/auth.reducer';

describe('Partners reducer', () => {
    const empObj = {loading: true};
    const actionList = {
        full_name: "Client Name",
        phone_number: "943234234",
        leads_nr: { valid: 0, invalid: 1}
    };
    const listSuccessAction = {
        type: partnertsConstants.CLI_LIST_SUCCESS, 
        resp: actionList,
    };
    const listFailureAction = {
        type: partnertsConstants.CLI_LIST_FAILURE,
        error: "some mock error",
    };
    const topReqAction = { type: partnertsConstants.CLI_TOP_REQUEST };
    const topSuccessAction = { 
        type: partnertsConstants.CLI_TOP_SUCCESS,
        resp: actionList
    };
    const topFailureAction = { 
        type: partnertsConstants.CLI_TOP_FAILURE,
        error: "some mock error" 
    };

    it('should return initial state', () => {
        expect(partners({}, {})).toEqual({})
    });

    it('List Request should return loading true', () => {
        expect(partners(undefined, {type: partnertsConstants.CLI_LIST_REQUEST}))
        .toEqual(empObj)
    });

    it('List Success should return list obj', () => {
        expect(partners(undefined, listSuccessAction))
        .toEqual({ list: actionList })
    });

    it('List Failure should return error obj', () => {
        expect(partners(undefined, listFailureAction))
        .toEqual({ error: "some mock error", })
    });

    it('Top Request should return loading true', () => {
        expect(partners(undefined, topReqAction))
        .toEqual({ loading: true })
    });

    it('Top Success should return CLI_top', () => {
        expect(partners(undefined, topSuccessAction))
        .toEqual({ topList: topSuccessAction.resp })
    });

    it('Top Failure should return error obj', () => {
        expect(partners(undefined, topFailureAction))
        .toEqual({ error: topFailureAction.error })
    });



});

describe('Auth reducer', () => {
    const actionLoginReq = {type: authConstants.LOGIN_REQUEST, user: {}};
    const actionLoginSuc = {
        type: authConstants.LOGIN_SUCCESS, 
        user: {
            name: "User Name",
            token: "mocktoken"
        }
    };
    
    const initialMockState = {
        loggedIn: true, 
        user: {
            name: "User Name", 
            token: "mocktoken"
        }
    };

    it('should return initial state', () => {
        expect(auth(undefined,{})).toEqual({})
    });
    
    it('Login Request should return', () => {
        expect(auth(undefined, actionLoginReq)).toEqual({
            loggingIn: true,
            user: actionLoginReq.user
          })
    });

    it('Login Success should return initialState', () => {
        expect(auth(initialMockState, actionLoginSuc)).toEqual(initialMockState)
    });

    it('Login Confirm should return initialState', () => {
        expect(auth(initialMockState, {type: authConstants.LOGIN_CONFIRM}))
        .toEqual(initialMockState)
    });
    
    it('Login Failure should return initialState', () => {
        expect(auth(undefined, {type: authConstants.LOGIN_FAILURE})).toEqual({})
    });

    it('Logout should return empty obj', () => {
        expect(auth(undefined,{type: authConstants.LOGOUT})).toEqual({})
    });
});