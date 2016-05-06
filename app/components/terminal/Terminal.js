import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/shell/shell';
import Preview from './preview/Preview';

class Terminal extends React.Component {
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(str){
        console.log(this.props.commands, str.match(''));
        
        let chars = str.split('');
        let split = str.split(/\n/);
        
        let isValid = split[split.length - 1] === '' && 
            split[split.length - 2] !== '';
        
        if (isValid) {
            var str = split[split.length - 2];
            if (str !== undefined) {
                this.props.onEnter(split[split.length - 2]);
            } else {
                console.log('is und:', str);
            }
        }
    }
    render(){
        return (
            <div className="code-mirror terminal">
                <h2>Terminal Emulator</h2>
                <Preview {...this.props} />
                <CodeMirror
                    className="CM-terminal"
                    options={{
                        theme: 'liquibyte',
                        lineNumbers: true,
                        mode: 'shell',
                    }}
                    onChange={this.handleChange}
                    />
            </div>
        )
    }
}


export default Terminal;