import React from 'react';
import Folder from '../folder/Folder';
import File from '../file/File';

class Preview extends React.Component {
    render(){
        return (
            <div className="preview">
                {this.props.filesystem.map((d, i) => {
                    return d.fileType === 'folder' ? 
                        <Folder key={i} 
                            name={d.name} 
                            contents={d.contents}
                            /> : 
                        <File key={i} text={d.name} />;
                })}
            </div>
        )
    }
}

export default Preview;