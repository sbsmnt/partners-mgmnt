import { combineReducers } from 'redux';
import auth from './auth.reducer';
import { alert } from './alert.reducer';
import partners from './partners.reducer';
import pages from './pages.reducer';

const rootReducer = combineReducers({
    auth,
    partners,
    pages,
    alert
});

export default rootReducer;