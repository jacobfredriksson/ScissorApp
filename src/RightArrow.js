import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom'

export default class RightArrow extends Component {


  render() {
    return (
      <HashRouter>
        <div>
          <Link to="/">
          <img src={require("./Images/downarrow.png")}/></Link>
        </div>
      </HashRouter>
    );
  }
}
