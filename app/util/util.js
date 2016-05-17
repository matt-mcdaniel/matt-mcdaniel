import store from './store';

export function pipeline(arr, ...fns) {
    
    let reduced = fns.reduce((acc, fn) => {
        return acc ? fn(arr) : false;
    }, true);
    
    return reduced;
}


export function assign(state, mergeObj) {
    return Object.assign({}, state, mergeObj);
}

export function join(arr, str) {
    return arr.reduce((a, c) => {
        return a + c + str;
    }, '');
}

export function getContentsByPath(workingDir, state) {
    const dirArray = workingDir.split('/')
        .filter((d) => d);
        
    if (dirArray.length === 0) {
        return state.filesystem.contents;
    } else {
        let contents = state.filesystem.contents;
        
        let targetContents = dirArray.reduce((a, c) => {
            let arr = contents.filter((item) => {
                return item.name === c;
            })
            
            return arr;
        }, []);
        
        if (targetContents.length === 1) {
            return targetContents[0].contents
        } else {
            console.warn('No than one directories with specified name');
            return contents;
        }
    }
}