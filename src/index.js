import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {HashRouter, Route} from 'react-router-dom';
import App from './App';


ReactDOM.render(<HashRouter>
  <div>
    <Route path="/" render={() => (
        <App />
    )}/>
  </div>
  </HashRouter>, document.getElementById('root'));
