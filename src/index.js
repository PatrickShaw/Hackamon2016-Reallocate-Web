import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes';
ReactDOM.render(
    <Routes history={browserHistory}/>,
    document.getElementById('root')
);
