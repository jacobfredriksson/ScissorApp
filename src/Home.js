import React, { Component } from 'react';
import Navbar from './Navbar';

import {HashRouter, Link, Route} from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
        </div>
      </HashRouter>
    );
  }
}
