import React from 'react';

class Social extends React.Component {
    render(){
        const items = [
            {
                text: 'LinkedIn',
                href: 'https://www.linkedin.com/in/matthmcdaniel',
                src: '../../img/linkedin-icon.svg'
            },
            {
                text: 'Github',
                href: 'https://github.com/matt-mcdaniel',
                src: '../../img/github-icon.svg'
            },
            {
                text: 'Codepen',
                href: 'http://codepen.io/himmel/',
                src: '../img/codepen-icon.svg'
            }
        ];
        
        return (
            <div className="social-container">
                {items.map(function(item) {
                    let lower = item.text.toLowerCase();
                    return <a className={'social ' + lower}
                                href={item.href}>
                            <img className="social__icon" 
                                src={item.src} />
                            <p className="social__text">
                                {item.text}
                            </p>
                        </a>
                })}
            </div>
        )
    }
}

export default Social;