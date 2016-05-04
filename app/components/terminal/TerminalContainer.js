import React from 'react';
import {connect} from 'react-redux';
import Terminal from './Terminal';
import {submit} from './TerminalDucks';

import {touch} from './TerminalDucks.js';

const mapStateToProps = (state) => {
    return {
        fileContents: state.terminal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEnter: (str) => {
            dispatch({
                type: 'ENTER',
                command: str
            });
            
            dispatch(
                submit(str)
            )
        }
    }
}

const TerminalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Terminal);

export default TerminalContainer;