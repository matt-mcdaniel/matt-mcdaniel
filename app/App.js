import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import Header from './components/header/Header';
import Feature from './components/feature/Feature';
import Footer from './components/footer/Footer';
import {Provider} from 'react-redux';
import store from './config/store';
import CodeContainer from './components/code/CodeContainer';

class Container extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Feature
                    title={'Experimental In-Browser Code Editor'}
                    link={'/code'}
                    description={'An experimental in-browser editor built with React and Codemirror.'}
                    />
                {/*<Footer
                    text={'© Copyright 2016 Matt McDaniel'}
                    />*/}
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Router history={ browserHistory }>
                    <Route path="/" component={Container}></Route>
                    <Route path="/code" component={CodeContainer}></Route>
                </Router>
            </Provider>
        )
    }
}

export default App;