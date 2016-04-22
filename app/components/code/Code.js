import React from 'react';
import {requestLib} from '../../actions/code';
import CodeMirror from 'CodeMirror';

class Code extends React.Component {
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.activeFilename = this.props.languages.reduce((acc, cur) => {
            if (cur.active) acc = cur.filename;
            return acc;
        },'');
    }
    
    handleClick(str){
        console.log('_handleClick:', str);
    }
    
    componentWillMount(){
        this.props.dispatch(requestLib(this.activeFilename));
    }
    
    render(){
        if (!this.props.loading) {
            return (
                <div className="code">
                    <ul className="code-chooser">
                    {this.props.languages.map((language, i) => {
                        let className = language.active ? ' active' : '';
                        return (
                            <li key={i} className="code-chooser__option">
                                <div onClick={this.handleClick.bind(null, language)} className={'code-chooser__button' + className}>
                                    <div className="code-chooser__text">
                                        {language.name}
                                    </div>
                                </div>
                            </li>
                        )
                    }.bind(this))}
                    </ul>
                    <div className="code-mirror full">
                        <textarea id="code">
                        </textarea>
                    </div>
                </div>
            )
        } else {
            return (
                <h3>Loading</h3>
            )
        }
    }
    componentDidMount(){
        console.log('CM', CodeMirror);
        this.props.dispatch({
            type: 'RECEIVE_LIB',
            lib: this.props.lib(CodeMirror)
        });
        //const CodeMirror = this.props.lib;
        //console.log(typeof CodeMirror, console.log(CodeMirror));
        
        /*
        CodeMirror.fromTextArea(document.getElementById('code'), {
            theme: 'mdn-like',
            lineNumbers: true,
            mode: 'xml'
        });
        */
    }
}

export default Code;