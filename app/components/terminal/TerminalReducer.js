import {
    TOUCH,
    MKDIR,
    RM
} from './TerminalConstants';

// folder structure
const initialState = {
    path: '/',
    filesystem: {
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
};

export default function terminal(state = initialState, action) {
    switch(action.type) {
        case TOUCH:
            return Object.assign({}, state, {
                filesystem: [
                    ...state.filesystem,
                    Object.assign({}, {
                        fileType: 'file',
                        contents: ''
                    })
                ]
            });
        case MKDIR:
            return Object.assign({}, state, {
                filesystem: [
                    ...state.filesystem,
                    Object.assign({}, {
                        fileType: 'folder',
                        contents: ''
                    })
                ]
            });
        case RM:
            let index = state.findIndex((x) => x.name === action.name.trim());
            return Object.assign({}, state, {
                filesystem: [
                    ...state.filesystem.slice(0, index),
                    ...state.filesystem.slice(index + 1)
                ]
            });
        default:
            return state;
    }
}