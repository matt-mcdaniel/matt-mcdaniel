import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <Link className="footer__link" to="/about-me">
                    About Me
                </Link>
            </footer>
        )
    }
}

export default Footer;