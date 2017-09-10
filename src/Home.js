import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import {HashRouter} from 'react-router-dom';

export default class Home extends Component {



  render() {
    return (
      <HashRouter>
        <div>
          <Navbar saloon={this.props.saloon.bind(this)}
                  home={this.props.home.bind(this)}
          />

          <Footer />
        </div>
      </HashRouter>
    );
  }
}
