import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <div className="footer__top-row">
                    <Link to="/about" className="footer__link">
                        About Me
                    </Link>
                </div>
                <div className="footer__middle-row">
                    <Link to="/about" className="footer__link">
                        View this page's repository
                    </Link>
                </div>
                <div className="footer__bottom-row">
                    <div className="footer__text">
                        Copyright 2016 Matt McDaniel
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;