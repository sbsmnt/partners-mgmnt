import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import config from '../config';
import rootReducer from '../reducers';

let middleWare = [thunkMiddleware];
if (config.envMode === 'DEV'){
    const loggerMiddleware = createLogger();
    middleWare = [...middleWare, loggerMiddleware]
}
const store = createStore(
    rootReducer,
    applyMiddleware(...middleWare),
);

export default store;