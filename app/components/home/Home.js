import React from 'react';
import Header from '../header/Header';
import Feature from '../feature/FeatureOuter';

// http://matt-mcdaniel.github.io/domain-inspector/


class Home extends React.Component {
    render() {
        return (
            <span>
                <Feature
                    title={'Top Level Domain Inspector'}
                    location={'External'}
                    link={'http://domaindetective.io'}
                    description={'Search and filter for customized Top-Level-Domain names.'}
                    tags={['Web Application']}
                />
                <Feature
                    title={'Browser Bash'}
                    location={'Internal'}
                    link={'/terminal'}
                    description={'A basic in-browser terminal for filesystem manipulation'}
                    tags={['Web Application']}
                />
                <Feature
                    title={'Mistaken Witness Identification'}
                    link={'/exonerations'}
                    location={'Internal'}
                    description={'A look at the data behind all of the exonerations in U.S. history'}
                    tags={['Data Visualization']}
                />
                <Feature
                    title={'Experimental In-Browser Code Editor'}
                    location={'Internal'}
                    link={'/code'}
                    description={'An experimental in-browser editor built with React and Codemirror.'}
                    tags={['Web Application']}
                />
            </span>
        )
    }
}

export default Home;