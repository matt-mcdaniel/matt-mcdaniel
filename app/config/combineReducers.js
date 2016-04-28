import {combineReducers} from 'redux';
import code from '../components/code/CodeReducer';
import terminal from '../components/terminal/TerminalReducer';

export default combineReducers({
    code,
    terminal
});
