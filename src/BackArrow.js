import React, { Component } from 'react';
import './css/BackArrow.css';

export default class BackButton extends Component {


  render() {
    return (
      <div>
          <img className="backArrow" src={require("./Images/leftarrowbig.png")} alt="back arrow icon"/>
      </div>
    );
  }
}
