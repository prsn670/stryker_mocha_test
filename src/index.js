import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const name = 'Constantine';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    <App />, document.getElementById('root'));
registerServiceWorker();
