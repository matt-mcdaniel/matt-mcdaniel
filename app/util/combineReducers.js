import {combineReducers} from 'redux';
import code from '../components/code/CodeReducer';
import terminal from '../components/terminal/TerminalDucks';
import command from '../components/terminal/CommandReducer';

export default combineReducers({
    code,
    command,
    terminal
});
