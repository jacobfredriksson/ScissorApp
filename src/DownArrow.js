import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import './css/DownArrow.css';


export default class DownArrow extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <img className={this.props.className} src={require("./Images/downarrow.png")} alt="Arrow pointing down"/>
        </div>
      </HashRouter>
    );
  }
}
