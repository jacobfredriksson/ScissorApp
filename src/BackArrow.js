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
          <img className="backArrow" src={require("./Images/leftarrowbig.png")} alt="back arrow icon"/>
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
