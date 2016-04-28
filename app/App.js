import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import Header from './components/header/Header';
import Feature from './components/feature/Feature';
import Footer from './components/footer/Footer';
import {Provider} from 'react-redux';
import store from './config/store';
import CodeContainer from './components/code/CodeContainer';
import TerminalContainer from './components/terminal/TerminalContainer';
import About from './components/about/About';

class Container extends React.Component {
    render() {
        return (
            <span>
                <div className="max-width-container">
                    <Header />
                    <Feature
                        title={'Experimental In-Browser Code Editor'}
                        link={'/code'}
                        description={'An experimental in-browser editor built with React and Codemirror.'}
                        />
                    <Feature
                        title={'Terminal'}
                        link={'/terminal'}
                        description={'A terminal shell emulator.'}
                        />
                </div>
                <Footer />
            </span>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Container}></Route>
                    <Route path="/code" component={CodeContainer}></Route>
                    <Route path="/terminal" component={TerminalContainer}></Route>
                    <Route path="/about" component={About}></Route>
                </Router>
            </Provider>
        )
    }
}

export default App;