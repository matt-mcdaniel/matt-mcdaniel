import React from 'react';
import {connect} from 'react-redux';
import Code from './Code';

const mapStateToProps = ({ code }) => {
    return {
        lib: code.lib,
        languages: code.languages,
        loading: code.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const CodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Code);

export default CodeContainer;
