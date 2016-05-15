import {assign} from '../../util/util';

import {
    TOUCH,
    MKDIR,
    RM
} from './TerminalConstants';

// folder structure
const initialState = {
    workingDir: '/',
    filesystem: {
        name: 'root',
        path: '/',
        fileType: 'folder',
        contents: [
            {
                name: 'index.html',
                path: '/index.html',
                fileType: 'file',
                contents: '<Nope/>'
            },
            {
                name: 'app.js',
                path: '/app.js',
                fileType: 'file',
                contents: 'no Javascript yet!'
            }
        ]
    }
};

export default function terminal(state = initialState, action) {
    switch(action.type) {
        case TOUCH:
            return assign(state, {
                filesystem: [
                    ...state.filesystem,
                    {
                        name: action.name,
                        fileType: 'file',
                        contents: '',
                        path: state.workingDir + action.name
                    }
                ]
            });
        case MKDIR:
            return assign(state, {
                filesystem: [
                    ...state.filesystem,
                    {
                        name: action.name,
                        fileType: 'file',
                        contents: '',
                        path: state.workingDir + action.name
                    }
                ]
            });
        case RM:
            let index = state.findIndex((x) => x.name === action.name.trim());
            return assign(state, {
                filesystem: [
                    ...state.filesystem.slice(0, index),
                    ...state.filesystem.slice(index + 1)
                ]
            });
        default:
            return state;
    }
}