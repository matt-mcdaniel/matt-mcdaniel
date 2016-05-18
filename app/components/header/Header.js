import React from 'react';
import Social from '../social/Social';
import {Link} from 'react-router';

class Header extends React.Component {
    
    constructor(){
        super();
        
        this.state = { 
            home: true
        }
    }
    
    componentWillReceiveProps(nextProps, nextContext) {
        if (document.location.pathname === '/') {
            this.setState({ home: true });
        } else {
            this.setState({ home: false });
        }
    }
    
    render(){
        return (
            <header className={'header-flex' + (this.state.home ? ' home' : '')} >
                <Link to="/">
                    <img className="header__img" src="img/me.png" />
                </Link>
                <div className="header-flex-text">
                    <h2 className="name">Matt McDaniel</h2>
                    <h3 className="title">JavaScript Developer</h3>
                    <Link to="/about" className="more-about-me">More About Me</Link>
                    <Social />
                </div>
            </header>
        )
    }
}

Header.contextTypes = {
    router: React.PropTypes.object
}

export default Header;