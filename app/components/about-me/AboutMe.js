import React from 'react';

class AboutMe extends React.Component {
    render(){
        return (
            <div className="subpage-container">
                <h1>About Me</h1>
                
                <p>
                    My name is Matt McDaniel and I'm a JavaScript developer based in Southern California. I have a background in design that I like to bring to my development endeavours in the form of intuitive user-facing application composition. I'm also interested in visualizing data in interesting way, specifically through powerful, data-driven web applications. I have extensive experience using D3.js. I also have experience using Angular and am currently building projects using React and enjoy using Redux to manage state.
                </p>
                <p>
                    My current role in San Diego, CA is at <a href="http://www.recoverybrands.com/">Recovery Brands</a>, where I work as an interactive front-end developer. I use my eye for design and interest in portraying data to create powerful client-facing visualizations that help empower users to make important treatment choices.
                </p>
                <p>
                    I'm passionate about innovation, moving the web forward, and I have powerful drive to create impactful and maintainable code. On a personal level, I enjoy exploring new domains of knowledge, including philosophy and art, and love to play pick-up beach volleyball, go to the gym, and surf.
                </p>
                <p>
                    Feel free to reach out to me via email at matthmcdaniel@gmail.com.
                </p>
            </div>
        )
    }
}

export default AboutMe;