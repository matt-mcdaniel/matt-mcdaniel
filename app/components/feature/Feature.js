import React from 'react';
import {Link} from 'react-router';

class Feature extends React.Component {
    render(){
        return (
            <Link to={this.props.link} className="feature">
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
            </Link>
        )
    }
}

export default Feature;