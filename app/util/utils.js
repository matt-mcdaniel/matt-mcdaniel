import store from './store';

export function pipeline(arr, ...fns) {
    
    let reduced = fns.reduce((acc, fn) => {
        return acc ? fn(arr) : false;
    }, true);
    
    return reduced;
}

export function inputValidator(str) {
    let line = str.split(/\n/);
    let words = str.split(' ');
    let chars = str.split('');
    
    var enterPress = chars[chars.length - 1] === '\n';
    var lastLine = line[line.length - 2] !== '';
    
    if (enterPress && lastLine) {
        return true;
    } else {
        console.log('nope', 'enterPress', enterPress, 'lastLine', lastLine);
    }

    return false;
}
