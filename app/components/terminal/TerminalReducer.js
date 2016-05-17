import {assign} from '../../util/util';

import {
    TOUCH,
    MKDIR,
    RM,
    CD
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
                filesystem: {
                    contents: [
                        ...state.filesystem.contents,
                        {
                            name: action.name,
                            fileType: 'file',
                            contents: '',
                            path: state.workingDir + action.name
                        }
                    ]
                }
            });
        case MKDIR:
            return assign(state, {
                filesystem: {
                    contents: [
                        ...state.filesystem.contents,
                        {
                            name: action.name,
                            fileType: 'folder',
                            contents: [],
                            path: state.workingDir + action.name
                        }
                    ]
                }
            });
        case RM:
            let index = state.filesystem.contents
                .findIndex((x) => x.name === action.name.trim());
            return assign(state, {
                filesystem: {
                    contents: [
                        ...state.filesystem.contents.slice(0, index),
                        ...state.filesystem.contents.slice(index + 1)
                    ]
                }
            });
        case CD:
            return assign(state, {
                workingDir: action.dir
            });
        default:
            return state;
    }
}