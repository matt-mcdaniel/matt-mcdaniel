import {
    TOUCH,
    MKDIR,
    RM
} from './TerminalConstants';

// folder structure
const initialState = [
    {
        name: 'app',
        fileType: 'folder',
        index: 0,
        contents: [
            {
                name: 'index.html',
                type: 'file'
            },
            {
                name: 'app.js',
                type: 'file'
            }
        ]
    }
];

export default function terminal(state = initialState, action) {
    switch(action.type) {
        case TOUCH:
            return [
                ...state,
                Object.assign({}, {
                    fileType: 'file',
                    contents: 'empty'
                }, action)
            ];
        case MKDIR:
            return [
                ...state,
                Object.assign({}, {
                    fileType: 'folder',
                    contents: []
                }, action)
            ];
        case RM:
            let index = state.findIndex((x) => x.name === action.name.trim());
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        default:
            return state;
    }
}