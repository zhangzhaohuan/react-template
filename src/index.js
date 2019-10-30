import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import store from './store';
import './style/index.scss';
ReactDOM.render(
    <Provider {...store}><App /></Provider>,
    document.getElementById('root'));
