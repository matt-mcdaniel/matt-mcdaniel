import {assign} from '../../util/utils';

const ENTER = "ENTER";
const DECREMENT = "DECREMENT";

const initialState = {
    length: 0,
    commands: []
}

export default function commands(state = initialState, action) {
    switch(action.type) {
        case ENTER:
            return assign(state, {
                index: state.commands.length + 1,
                commands: [
                    ...state.commands,
                    action.command
                ]
            });
        case DECREMENT:
            return assign(state, {
                index: state.index - 1 < 0 ? 0 : state.index - 1
            });
        default:
            return state;
    }
}