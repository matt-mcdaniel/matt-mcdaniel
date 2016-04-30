import React from 'react';
import {connect} from 'react-redux';
import Terminal from './Terminal';

const mapStateToProps = (state) => {
    return {
        commands: state.terminal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEnter: (str) => {
            dispatch({
                type: 'ENTER',
                command: str
            })
        }
    }
}

const TerminalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Terminal);

export default TerminalContainer;