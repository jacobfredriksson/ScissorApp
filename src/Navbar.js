import React, { Component } from 'react';
import BookingPage from './BookingPage';
import FavoritePage from './FavoritePage';
import ProfilePage from './ProfilePage';
import Saloons from './Saloons';
import SchedulePage from './SchedulePage';
import Logo from './Logo';
import './css/Navbar.css'
import { NavDropdown, Nav} from 'react-bootstrap';
import {HashRouter, Link, Route} from 'react-router-dom';

export default class Home extends Component {

test() {
  if(this.props.home === true) {
    console.log('bajs')
    return [
      <Saloons />
    ]
  }
}

  render() {
    return (
      <HashRouter>
          <div className="container-fluid">
            <Logo />
            <Nav>
              <div className="row">
                <div className="col-sm-12">
                  <NavDropdown className="navDropdown" eventKey={3} title="Hår" id="basic-nav-dropdow">
                    <Link to="/BookingPage">Klippa</Link>
                    <Link to="/BookingPage">Slinga</Link>
                    <Link to="/BookingPage">Färga</Link>
                    <Link to="/BookingPage">Rensa skägg</Link>
                  </NavDropdown>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <NavDropdown className="navDropdown" eventKey={3} title="Naglar" id="basic-nav-dropdown">
                    <Link to="/BookingPage">Klippa</Link>
                    <Link to="/BookingPage">Slinga</Link>
                    <Link to="/BookingPage">Färga</Link>
                    <Link to="/BookingPage">Rensa skägg</Link>
                  </NavDropdown>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <NavDropdown className="navDropdown" eventKey={3} title="Hud" id="basic-nav-dropdown">
                    <Link to="/BookingPage">Klippa</Link>
                    <Link to="/BookingPage">Slinga</Link>
                    <Link to="/BookingPage">Färga</Link>
                    <Link to="/BookingPage">Rensa skägg</Link>
                  </NavDropdown>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <NavDropdown className="navDropdown" eventKey={3} title="Hår" id="basic-nav-dropdown">
                    <Link to="/BookingPage">Klippa</Link>
                    <Link to="/BookingPage">Slinga</Link>
                    <Link to="/BookingPage">Färga</Link>
                    <Link to="/BookingPage">Rensa skägg</Link>
                  </NavDropdown>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <NavDropdown className="navDropdown" eventKey={3} title="Ansikte" id="basic-nav-dropdown">
                    <Link to="/BookingPage">Klippa</Link>
                    <Link to="/BookingPage">Slinga</Link>
                    <Link to="/BookingPage">Färga</Link>
                    <Link to="/BookingPage">Rensa skägg</Link>
                  </NavDropdown>
                </div>
              </div>
            </Nav>

          </div>
      </HashRouter>
    );
  }
}
