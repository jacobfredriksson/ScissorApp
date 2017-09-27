import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom'
import Home from './Home'

export default class BackButton extends Component {


  render() {
    return (
      <HashRouter>
      <div>
        <button > <Link to="/">Backa </Link></button>

        <HashRouter path="/" render={() => (
          <Home

          />
        )}/>
      </div>
      </HashRouter>
    );
  }
}
