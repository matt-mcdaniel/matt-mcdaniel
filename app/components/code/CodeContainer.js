import React from 'react';
import {connect} from 'react-redux';
import Code from './Code';
import {getLib, setActiveLanguage} from './CodeActions';
import store from '../../config/store';

const mapStateToProps = ({ code }) => {
    return {
        languages: code.languages,
        loading: code.loading,
        active: code.active
    }
}

const mapDispatchToProps = (dispatch) => {   
    return {
        getLib: (obj) => {
            if (!obj.active && window.hasOwnProperty('System')) {
                console.log(window['System']);
                dispatch(getLib(obj));
            } else {
                dispatch(setActiveLanguage(obj.name));
            }
        },
        setActiveLanguage: (str) => {
            dispatch(setActiveLanguage(str));   
        }
    }
}

const CodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Code);

export default CodeContainer;
