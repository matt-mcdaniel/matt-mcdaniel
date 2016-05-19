import React from 'react';

class AboutMe extends React.Component {
    render(){
        return (
            <div className="subpage-container about-me__container">
                <h1 clasName="about-me__title">About Me</h1>
                
                <p className="about-me__lead-in">
                    My name is Matt McDaniel and I'm a JavaScript developer based in Southern California.
                </p>
                <p>
                    I'm interested in creating powerful, data-driven web applications.
                </p>
                <p>
                     I have extensive experience using D3.js. I also have experience using Angular and am currently building projects using React and using Redux.
                </p>
                <p>
                    My current role in San Diego, CA is at<a className="about-me__link" href="http://www.recoverybrands.com/"> Recovery Brands</a>
                    , where I work as an interactive front-end developer. I use my eye for design and interest in portraying data to create powerful client-facing visualizations that help empower users to make important treatment choices.
                </p>
                <p>
                    On a personal level, I enjoy hanging out at the beach, going to the gym, and learning new skills.
                </p>
                <p>
                    Feel free to reach out to me via email at <a href="mailto:matthmcdaniel@gmail.com" className="about-me__link">matthmcdaniel@gmail.com</a>.
                </p>
            </div>
        )
    }
}

export default AboutMe;