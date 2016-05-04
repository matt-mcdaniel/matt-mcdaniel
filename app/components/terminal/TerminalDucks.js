import {pipeline} from '../../config/utils.js';

const ENTER = "ENTER";
const MKDIR = "MKDIR";
const TOUCH = "TOUCH";

// folder structure
const initialState = [
    {
        name: 'commands.txt',
        fileType: 'file',
        contents: []
    },
    {
        name: 'app',
        fileType: 'folder',
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
]

export function submit(str) {
    return dispatch => {
    
        let arr = str.split(' ');
        
        let touch = ['touch', pipeline(
            arr,
            (arr) => arr[0] === 'touch',
            (arr) => arr.length === 2,
            (arr) => {
                dispatch({
                    type: TOUCH,
                    fileType: 'file',
                    name: arr[1],
                    contents: ''
                });
            }
        )];
        
        let mkdir = ['mkdir', pipeline(
            arr,
            (arr) => arr[0] === 'mkdir',
            (arr) => arr.length === 2,
            (arr) => {
                dispatch({
                    type: MKDIR,
                    fileType: 'folder',
                    name: arr[1],
                    contents: ''
                });
            }
        )];
        
    }
    
    
}

export default function terminal(state = initialState, action) {
    switch(action.type) {
        case ENTER:
            return [
                {
                    name: 'commands.txt',
                    type: 'file',
                    contents: [
                        ...state[0].contents,
                        action.command
                    ]
                },
                ...state.slice(1)
            ];
        case TOUCH:
            return [
                ...state,
                action
            ];
            
        case MKDIR:
            return [
                ...state,
                action
            ];
        default:
            return state;
    }
}