import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Provider} from 'react-redux';
import store from './util/store';
import CodeContainer from './components/code/CodeContainer';
import TerminalContainer from './components/terminal/TerminalContainer';
import About from './components/about/About';
import Home from './components/home/Home';
import Exonerations from './components/exonerations/Exonerations';

class Container extends React.Component {
    render() {
        return (
            <span>
                <Header />
                    <div className="max-width-container">
                        {this.props.children}
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
                    <Route path="/" component={Container}>
                        <IndexRoute component={Home} /> 
                        <Route path="/code" component={CodeContainer}></Route>
                        <Route path="/terminal" component={TerminalContainer}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/exonerations" component={Exonerations}></Route>
                    </Route>

                </Router>
            </Provider>
        )
    }
}

export default App;