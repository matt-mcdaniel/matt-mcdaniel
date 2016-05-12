import React from 'react';
import {defaultClass, active, filePosition} from './FolderStyles';

class Folder extends React.Component {
    
    constructor() {
        super();
        
        this.state = { active: false };
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }
    
    mouseOver() {
        this.setState({
            active: true
        });
    }
    
    mouseOut() {
        this.setState({
            active: false
        });
    }
    
    render(){
        
        const paper = (c, i) => {
            return (
                <div 
                    key={i} 
                    className="folder-paper"
                    style={filePosition(i, this.state.active)}>
                </div>
            )
        }
        
        return (
            <div onMouseOver={this.mouseOver} 
                className="folder-container"
                onMouseOut={this.mouseOut}
                >
                <div className="folder-front">{this.props.name}</div>
                {this.props.contents.map((c, i) => {
                    return paper(c, i);
                })}
                <div 
                    className="folder-back"
                    style={this.state.active ? active : defaultClass} 
                    >
                </div>
            </div>
        )
    }
    
}

export default Folder;