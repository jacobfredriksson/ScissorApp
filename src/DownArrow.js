import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom';
import './css/DownArrow.css';


export default class DownArrow extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <img className="down-arrow" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/downarrow.png?raw=true"/>
        </div>
      </HashRouter>
    );
  }
}
