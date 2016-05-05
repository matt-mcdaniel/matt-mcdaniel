const ENTER = "ENTER";

export default function command(state = [], action) {
    switch(action.type) {
        case ENTER:
            return [
                ...state,
                action.command
            ];
        default:
            return state;
    }
}