import React from 'react';
import {connect} from 'react-redux';
import Terminal from './Terminal';

const mapStateToProps = (state) => {
    return {
        items: ['dog']
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEnter: (str) => {
            console.log(str)
        }
    }
}

const TerminalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Terminal);

export default TerminalContainer;