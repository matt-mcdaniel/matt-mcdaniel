export const defaultClass = {
    top: '-35%',
    transition: 'all 100ms ease-out'
}

export const active = {
    top: '-45%',
    transition: 'all 100ms ease-in'
}

export function filePosition(i, active) {
    let fileStyle;
    let baseOne = i + 1;
    if (active) {
        fileStyle = '-' + (baseOne * 20) + '%';
    } else {
        fileStyle = '-' + (baseOne * 10) + '%';
    }
    return {
        transition: 'all 150ms ease-out',
        top: fileStyle,
        zIndex: -1 - i
    }
}