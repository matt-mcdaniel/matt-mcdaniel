import React from 'react';

class Social extends React.Component {
    render(){
        const items = [
            {
                text: 'LinkedIn',
                href: 'https://www.linkedin.com/in/matthmcdaniel',
                src: '../../img/linkedin.svg'
            },
            {
                text: 'Github',
                href: 'https://github.com/matt-mcdaniel',
                src: '../../img/github.svg'
            },
            {
                text: 'Codepen',
                href: 'http://codepen.io/himmel/',
                src: '../img/codepen.svg'
            }
        ];
        
        return (
            <div className="social-container">
                {items.map(function(item, i) {
                    let lower = item.text.toLowerCase();
                    return <a key={i} className={'social ' + lower}
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