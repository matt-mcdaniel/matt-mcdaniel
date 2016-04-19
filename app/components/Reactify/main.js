import React from 'react';
import ReactDOM from 'react-dom';

class Reactify extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '<input class="test" for="testing" />',
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
        console.log('transform');
        console.log(html);
        return html.split(' ').join('');
    }
    
    update(e) {
        try {
            this.setState({ 
                output: ReactDOM.findDOMNode(this.refs.inp).value
            });
        }
        catch(err){
            this.setState({err: err.message});
        }
    }
    
    render() {
        return (
            <div className="reactify">
                <h1 className="reactify__title">Reactify</h1>
                <textarea
                    ref="inp"
                    className="reactify__input"
                    onClick={this.handleClick}
                    onChange={this.update}
                    defaultValue={this.state.input}>
                </textarea>
                <pre className="reactify__preview">
                    <code>
                        <span className="code__comment">
                        {'/* JavaScript Output */'}</span>
                        {this.state.output}
                    </code>
                </pre>
            </div>
        );
    }

}

export default Reactify;