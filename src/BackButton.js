import React, { Component } from 'react';
import {HashRouter, Link, Route} from 'react-router-dom'
import Home from './Home'

export default class BackButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HashRouter>
      <div>
        <button className="btn btn-success"> <Link to="/Home">Backa </Link></button>

        <Route path="/Home" render={() => (
          <Home

          />
        )}/>
      </div>
      </HashRouter>
    );
  }
}
