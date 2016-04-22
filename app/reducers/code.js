import {REQUEST_LIB, RECEIVE_LIB} from '../actions/code';

export default function code(state = {
    lib: '',
    loading: false,
    languages: [
        {
            name: 'HTML',
            filename: 'xml',
            active: true
        },
        {
            name: 'JavaScript',
            filename: 'javascript',
            active: false
        },
        {
            name: 'CSS',
            filename: 'css',
            active: false
        }
    ]
}, action) {
    switch(action.type) {
        case REQUEST_LIB:
            return Object.assign({}, state, {
                loading: true
            });
        case RECEIVE_LIB:
            return Object.assign({}, state, {
                lib: action.lib,
                loading: false
            });
        default:
            return state;
    }
}