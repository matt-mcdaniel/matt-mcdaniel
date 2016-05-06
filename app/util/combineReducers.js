import {combineReducers} from 'redux';
import code from '../components/code/CodeReducer';
import terminal from '../components/terminal/TerminalReducer';
import commands from '../components/terminal/CommandReducer';

export default combineReducers({
    code,
    commands,
    terminal
});
