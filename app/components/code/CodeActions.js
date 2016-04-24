import store from '../../config/store';


export const REQUEST_LIB = 'REQUEST_LIB';
export const RECEIVE_LIB = 'RECEIVE_LIB';
export const SET_ACTIVE_LANGUAGE = 'SET_ACTIVE_LANGUAGE';


export function setActiveLanguage(str){
    return {
        type: SET_ACTIVE_LANGUAGE,
        name: str
    }
}

export function getLib(obj) {
    
    return dispatch => {
        
        dispatch({ 
            type: REQUEST_LIB,
            name: obj.name
        });
       
        System.import('codemirror/mode/' + obj.filename + '/' + obj.filename)
            .then((m) => {
                dispatch({ type: RECEIVE_LIB, lib: m });
                dispatch(setActiveLanguage(obj.name))
            })
            .catch((e) => console.warn(e));

    }
}