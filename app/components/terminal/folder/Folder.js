import React from 'react';

class Folder extends React.Component {
    render(){
        return (
            <div className="folder-container">
                <div className="folder-front">{this.props.text}</div>
                <div className="folder-paper"></div>
                <div className="folder-back"></div>
            </div>
        )
    }
    
}

export default Folder;