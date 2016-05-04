import React from 'react';


class File extends React.Component {
    render() {
        return (
            <div className="file">
                {this.props.text}
            </div>
        )
    }
}

export default File;