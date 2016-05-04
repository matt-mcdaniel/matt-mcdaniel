export function pipeline(arr, ...fns) {
    
    let reduced = fns.reduce((acc, fn) => {
        return acc ? fn(arr) : false;
    }, true);
    
    return reduced;
}