export const REQUEST_LIB = 'REQUEST_LIB';
export const RECEIVE_LIB = 'RECEIVE_LIB';

export function requestLib(lib) {   
    
    return dispatch => {
        
        dispatch({ type: REQUEST_LIB });
        
        System.import(lib)
            .then((m) => {
                dispatch({ type: RECEIVE_LIB, lib: m.default });
            })
            .catch((e) => console.warn(e));

    }
}