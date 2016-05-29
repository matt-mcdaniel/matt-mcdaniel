import React from 'react';
import {Link} from 'react-router';
import Feature from './Feature';

class FeatureOuter extends React.Component {
    render(){
        if (this.props.location === 'Internal') {
            return (
                <Link to={this.props.link} className="feature">
                    <Feature {...this.props} />
                </Link>
            )
        } else {
            return (
                <a href={this.props.link} className="feature">
                    <div className="feature__location">{this.props.location}</div>
                    <Feature {...this.props} />
                </a>
            )
        }
    }
}

export default FeatureOuter;