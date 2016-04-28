import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/jsx/jsx';

class Code extends React.Component {
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            focus: false
        }
    }
    
    handleClick(obj){
        this.props.setActiveLanguage(obj.name);
    }
    
    onChange(e){
        console.log(e);
    }
    
    onFocusChange(){
        console.log('args:', arguments, this.refs);
    }
    
    componentWillMount(){
        this.props.setActiveLanguage(this.props.active);
    }
    
    render(){
        let activeObj = this.props.languages.filter((d) => d.name === this.props.active)[0];
        let isFocused = this.state.focus;

        if (!this.props.loading) {
            return (
                <div className="code">
                    <ul className="code-chooser">
                    {this.props.languages.map(function(language, i) {
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
                        <CodeMirror
                            className={isFocused ? 'active': ''}
                            options={{
                                theme: 'mdn-like',
                                lineNumbers: true,
                                mode: activeObj.filename,
                                tabSize: 3,
                            }}
                            onChange={this.onChange}
                            onFocusChange={this.onFocusChange} 
                            />
                        
                    </div>
                </div>
            )
        } else {
            return (
                <h3>Loading</h3>
            )
        }
    }
    

}

export default Code;