import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import Header from './components/header';
import Reactify from './components/Reactify/main';

class Container extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Reactify />
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={Container}>

                </Route>
            </Router>
        )
    }
}

export default App;