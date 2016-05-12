import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/shell/shell';
import Preview from './preview/Preview';


class Terminal extends React.Component {
    constructor(props){
        super(props);
        
        // declaration sets "this" context as component
        // allows self-referencing with this.function
        this.beforeChange = this.beforeChange.bind(this);
        this.keyHandled = this.keyHandled.bind(this);
        this.updateLine = this.updateLine.bind(this);
    }
    
    beforeChange(cm, e) {
        // no backspace on char 0
        if (e.origin === '+delete' && e.to.ch === 0) {
            e.cancel();
        }
    }
    
    updateLine(cm, lineFn) {
        
        let cmd = this.props.commands[this.props.index];

        // get line number
        let line = cm.getCursor().line;
        
        // replace characters
        if (cmd) {
            cm.replaceRange(cmd, {line: lineFn(line), ch: 0}, {line: line + 1, ch: 100 });
        }

        // set cursor
        cm.setCursor({ line: lineFn(line), ch: cmd.length });
        
    }
    
    keyHandled(cm, key, e) {
        // recall last command
        if (key === 'Up') {
            this.props.decrementCmd();
            this.updateLine(cm, (line) => line + 1);
        }
        
                // recall last command
        if (key === 'Down') {
            this.props.incrementCmd();
            this.updateLine(cm, (line) => line);
        }
        
        // submit command
        if (key === 'Enter') {
            var lines = cm.display.lineDiv.innerText
                .split(/\r?\n|\r/gm);
                
            var lastValidInput = lines.reduceRight((a, c) => {
                return a !== '' ? a : c;
            }, '');
            
            this.props.submitCmd(lastValidInput)
        }
    }
    
    render(){
        var text = ['one', 'two', 'three']
        return (
            <div onKeyDown={this.keyDown} className="code-mirror terminal">
                <h2>Terminal Emulator</h2>
                <Preview {...this.props} />
                <CodeMirror
                    ref="codemirror"
                    className="CM-terminal"
                    options={{
                        theme: 'liquibyte',
                        lineNumbers: false,
                        mode: 'shell',
                    }}
                    // fires on any activity
                    onChange={this.handleChange}
                    />
            </div>
        )
    }
    
    componentDidMount() {
        //this.setState({ cm: this.refs.codemirror.getCodeMirror() });
        
        const cm = this.refs.codemirror.getCodeMirror();

        cm.on('beforeChange', this.beforeChange);
        cm.on('keyHandled', this.keyHandled);
    }
}


export default Terminal;export default Terminal;