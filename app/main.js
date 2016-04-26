import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/footer/Footer';

// Bootstrap application to DOM
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Footer />, document.getElementById('footer'));