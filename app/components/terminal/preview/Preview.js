import React from 'react';
import Folder from '../folder/Folder';
import File from '../file/File';
import {getContentsByPath} from '../../../util/util';


class Preview extends React.Component {
    
    shouldComponentUpdate(nextProps){
        
        return true;
    }
    
    render(){
        let state = this.props.filesystem;
        let {workingDir} = this.props.filesystem;
        let contents = getContentsByPath(workingDir, state);
        
        return (
            <div className="preview">
                {contents.map((d, i) => {
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