import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/shell/shell';
import Preview from './preview/Preview';
import {inputValidator} from '../../util/utils';


class Terminal extends React.Component {
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(str){
        
        var valid = inputValidator(str);
        
        if (valid) {
            this.props.submit(str);
        }
    }
    render(){
        var text = ['one', 'two', 'three']
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