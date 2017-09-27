import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './css/IphoneTop.css'

export default class IphoneTop extends Component {

  render() {
    return (
      <HashRouter>
        <img className="itopbar" src={require("./Images/itopbar.png")} alt="iphone topbar"/>
      </HashRouter>
    );
  }
}
