import React from 'react';

import Header from '../header/Header';
import Feature from '../feature/Feature';
import Exonerations from '../exonerations/Exonerations';

class Home extends React.Component {
    render() {
        return (
            <span>
                <Header />
                <Exonerations />
                <Feature
                    title={'Experimental In-Browser Code Editor'}
                    link={'/code'}
                    description={'An experimental in-browser editor built with React and Codemirror.'}
                    />
                {/*
                <Feature
                    title={'Terminal Emulator'}
                    link={'/terminal'}
                    description={'A terminal shell emulator.'}
                    />
                */}
            </span>
        )
    }
}

export default Home;