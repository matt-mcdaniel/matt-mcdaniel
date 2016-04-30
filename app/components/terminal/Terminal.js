import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/shell/shell';

class Terminal extends React.Component {
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(str){
        let split = str.split(/\n/);
        
        if (split[split.length - 1] === '' && split[split.length - 2] !== '') {
            this.props.onEnter(split[split.length - 2]);
        }
    }
    render(){
        console.log(this.props);
        return (
            <div className="code-mirror terminal">
                <h2>Terminal Emulator</h2>
                <div className="preview">
                    {this.props.commands.slice(-3).map((d, i) => {
                        return (
                            <div className="preview__code" key={i}>{d}</div>
                        )
                    })}
                </div>
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