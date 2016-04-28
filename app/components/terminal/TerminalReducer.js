import {
    ENTER
} from './TerminalActions';

export default function terminal(state = {
    commands: []
}, action) {
    switch(action.type) {
        case ENTER:
            return Object.assign({}, state, {
                commands: action.command
            });
        default:
            return state;
    }
}