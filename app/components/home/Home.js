import React from 'react';
import Header from '../header/Header';
import Feature from '../feature/Feature';


class Home extends React.Component {
    render() {
        return (
            <span>
                <Feature
                    title={'Browser Bash'}
                    link={'/terminal'}
                    description={'A basic in-browser terminal for filesystem manipulation'}
                    tags={['Web Application']}
                />
                <Feature
                    title={'Mistaken Witness Identification'}
                    link={'/exonerations'}
                    description={'A look at the data behind all of the exonerations in U.S. history'}
                    tags={['Data Visualization']}
                />
                <Feature
                    title={'Experimental In-Browser Code Editor'}
                    link={'/code'}
                    description={'An experimental in-browser editor built with React and Codemirror.'}
                    tags={['Web Application']}
                />
            </span>
        )
    }
}

export default Home;