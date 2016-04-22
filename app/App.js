import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import Header from './components/header/Header';
import CodeContainer from './components/code/CodeContainer';
import {Provider} from 'react-redux';
import reducers from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger({
    collapsed: true,
    timestamp: false
});

const store = createStore(
    reducers,
    applyMiddleware(thunk, loggerMiddleware)
)

class Container extends React.Component {
    render() {
        return (
            <div>
                <Header />
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