import React from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from './codemirror';

class Reactify extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
            output: '',
            err: '',
            started: false
        }
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.transform = this.transform.bind(this);
    }
    
    handleClick() {
        if (!this.state.started) {
            ReactDOM.findDOMNode(this.refs.inp).defaultValue = '';
            this.setState({ input:'' });
            this.setState({started: true});
        }
    }
    
    transform(html) {
        return html.split(' ').join('');
    }
    
    update(e) {
        try {
            this.setState({ 
                output: ReactDOM.findDOMNode(this.refs.input).value
            });
        }
        catch(err){
            this.setState({err: err.message});
        }
    }
    
    render() {

        return (
            <div className="reactify">
                <textarea
                    className="reactify__input"
                    id="input"
                    ref="input"
                    onClick={this.handleClick}
                    onChange={this.update}
                    >
                </textarea>
                <textarea 
                    className="reactify__output"
                    id="output"
                    value={this.state.input}
                    >
                </textarea>
            </div>
        )
    }
    
    componentDidMount() {
        
        CodeMirror.fromTextArea(document.getElementById('input'), {
            theme: 'mdn-like',
            lineNumbers: true,
            mode: 'xml',
            value: 'test'
        });
        
        CodeMirror.fromTextArea(document.getElementById('output'), {
            theme: 'mdn-like',
            lineNumbers: true,
            mode: 'xml',
            value: 'test',
            readOnly: true
        });
        
        function setState() {
            this.setState({
                output: ReactDOM.findDOMNode(this.refs.input).value
            });
        }
        
        setInterval(200, setState)
    }

}

export default Reactify;
