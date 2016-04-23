import {
    REQUEST_LIB, 
    RECEIVE_LIB,
    SET_ACTIVE_LANGUAGE
} from './CodeActions';

export default function code(state = {
    active: 'JavaScript',
    loading: false,
    languages: [
        {
            name: 'JavaScript',
            filename: 'javascript',
            active: false
        },
        {
            name: 'JSX',
            filename: 'jsx',
            active: false
        },
        {
            name: 'HTML',
            filename: 'xml',
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
                loading: false
            });
        case SET_ACTIVE_LANGUAGE:
            return Object.assign({}, state, {
                active: action.name,
                languages: state.languages.map((d) => {
                    if (d.name === action.name) {
                        d.active = true;
                    } else {
                        d.active = false;
                    }
                    
                    return d;
                })
            })
        default:
            return state;
    }
}