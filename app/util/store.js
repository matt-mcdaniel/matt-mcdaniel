import reducers from './combineReducers';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger({
    collapsed: false,
    timestamp: false
});

export default createStore(
    reducers,
    applyMiddleware(
        thunk, 
        loggerMiddleware
    )
)