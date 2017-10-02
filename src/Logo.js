import React, { Component } from 'react';
import './css/Logo.css'

export default class Home extends Component {

  render() {
    return (
      <div>
        <img className="logo" src={require("./Images/hair.png")} alt="Logo"/>
      </div>
    );
  }
}
