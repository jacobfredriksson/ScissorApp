import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './css/IphoneTop.css'

export default class IphoneTop extends Component {

  render() {
    return (
      <HashRouter>
        <img className="itopbar" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/itopbar.png?raw=true" alt="iphone topbar"/>
      </HashRouter>
    );
  }
}
