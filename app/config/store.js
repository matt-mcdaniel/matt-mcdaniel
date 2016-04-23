import reducers from './combineReducers';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger({
    collapsed: true,
    timestamp: false
});

export default createStore(
    reducers,
    applyMiddleware(thunk, loggerMiddleware)
)