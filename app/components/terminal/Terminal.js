import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/shell/shell';

class Terminal extends React.Component {
    constructor(props){
        super(props);
    }
    handleChange(str){
        //console.log(this.props);
        //console.log(str.match(/\n/gi));
    }
    render(){
        return (
            <div className="code-mirror terminal">
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