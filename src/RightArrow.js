import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom'

export default class RightArrow extends Component {


  render() {
    return (
      <HashRouter>
        <div>
          <Link to="/">
          <img src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/rightarrow.png?raw=true"/></Link>
        </div>
      </HashRouter>
    );
  }
}
