import {pipeline} from '../../util/utils.js';
import store from '../../util/store';

const MKDIR = "MKDIR";
const TOUCH = "TOUCH";
const RM = "RM";

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
]

function getObjectByName(name) {
    let root = store.getState().terminal;
    
    let match = root.filter((d) => d.name === name);
    
    return match[0]
}

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
        
        let rm = ['rm', pipeline(
            arr,
            (arr) => arr[0] === 'rm',
            (arr) => arr.length === 2,
            (arr) => {
                let obj = getObjectByName(arr[1]);
                
                if (obj) {
                    dispatch({
                        type: RM,
                        index: obj.index
                    })
                }
            }
        )];
        
        console.log('touch:', touch, 'mkdir:', mkdir);
        
    }
    
    
}

export default function terminal(state = initialState, action) {
    switch(action.type) {
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
        case RM:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}