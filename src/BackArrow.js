import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom'
import Home from './Home'
import './css/BackArrow.css';

export default class BackButton extends Component {


  render() {
    return (
      <HashRouter>
      <div>
        <Link to="/">
          <img className="backArrow" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/leftarrowbig.png?raw=true"/>
        </Link>
        <HashRouter path="/" render={() => (
          <Home

          />
        )}/>
      </div>
      </HashRouter>
    );
  }
}
