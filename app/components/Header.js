import React from 'react';
import Social from './Social';

class Header extends React.Component {
    render(){
        return (
            <header className="header-flex">
                <img className="header__img" src="img/me.png" />
                <div className="header-flex-text">
                    <h2 className="name">Matt McDaniel</h2>
                    <h3 className="title">JavaScript Developer</h3>
                    
                    <Social />
                </div>
            </header>
        )
    }
}

export default Header;