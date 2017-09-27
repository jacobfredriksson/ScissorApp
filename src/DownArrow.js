import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './css/DownArrow.css';


export default class DownArrow extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <img className={this.props.className} src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/downarrow.png?raw=true" alt="Arrow pointing down"/>
        </div>
      </HashRouter>
    );
  }
}
