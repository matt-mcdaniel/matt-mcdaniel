import React from 'react';

class Feature extends React.Component {
    render() {
        return (
            <span>
                <h1 className="feature__title">{this.props.title}</h1>
                <p className="feature__description">{this.props.description}</p>
                {this.props.tags.map((g, i) => {
                    let className = g.toLowerCase().replace(' ', '-');
                    return (
                        <p 
                            key={i}
                            className={'feature__tag' + ' ' + className} 
                        >{g}</p>
                    )
                })}
            </span>
        )
    }
}

export default Feature;