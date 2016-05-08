import React from 'react';
import {connect} from 'react-redux';
import Terminal from './Terminal';
import {submit} from './TerminalActions';

const mapStateToProps = (state) => {
    return {
        commands: state.commands,
        filesystem: state.terminal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (str) => {
            
            dispatch({
                type: 'ENTER',
                command: str
            });
            
            dispatch(submit(str));
        }
    }
}

const TerminalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Terminal);

export default TerminalContainer;