import {pipeline} from '../../util/utils.js';
import store from '../../util/store';
import * as actions from './TerminalConstants';

export function submit(str) {
    return dispatch => {
    
        let arr = str.split(' ');
        
        let touch = pipeline(
            arr,
            (arr) => arr[0] === 'touch',
            (arr) => arr.length === 2
        );
        
        let mkdir = pipeline(
            arr,
            (arr) => arr[0] === 'mkdir',
            (arr) => arr.length === 2
        );
        
        let rm = pipeline(
            arr,
            (arr) => arr[0] === 'rm',
            (arr) => arr.length === 2
        );
        
        if (touch) {
            dispatch({
                type: actions.TOUCH,
                name: arr[1]
            });
        } else if (mkdir) {
            dispatch({
                type: actions.MKDIR,
                name: arr[1]
            });
        } else if (rm) {
            dispatch({
                type: actions.RM,
                name: arr[1]
            });
        }

        
    }
    
    
}