import React from 'react';
import Folder from '../folder/Folder';
import File from '../file/File';
import {getContentsByIndex} from '../../../util/util';


class Preview extends React.Component {
    
    shouldComponentUpdate(nextProps){
        
        console.log('nextProps', nextProps);
        return false;
    }
    
    render(){
        let filesystem = this.props.filesystem;
        let {workingDir} = this.props.filesystem;
        let contents = getContentsByIndex(workingDir, filesystem);
        
        //console.log('contents', contents);
        
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