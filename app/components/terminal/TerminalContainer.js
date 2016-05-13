import React from 'react';
import {connect} from 'react-redux';
import Terminal from './Terminal';
import {submit} from './TerminalActions';

const mapStateToProps = (state) => {
    return {
        index: state.commands.index,
        commands: state.commands.commands,
        filesystem: state.terminal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitCmd: (str) => {
            dispatch({
                type: 'ENTER',
                command: str
            });
            
            dispatch(submit(str));
        },
        decrementCmd: () => {
            dispatch({
                type: 'DECREMENT'
            });
        },
        incrementCmd: () => {
            dispatch({
                type: 'INCREMENT'
            });
        }
    }
}

const TerminalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Terminal);

export default TerminalContainer;