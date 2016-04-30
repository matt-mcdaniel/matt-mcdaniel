const ENTER = "ENTER";

export default function terminal(state = [], action) {
    switch(action.type) {
        case ENTER:
            return [...state, action.command]
        default:
            return state;
    }
}