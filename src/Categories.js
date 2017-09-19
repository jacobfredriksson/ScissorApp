import React, { Component } from 'react';
import './css/Categories.css'
import { NavDropdown, Nav} from 'react-bootstrap';
import {HashRouter, Link} from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <HashRouter>
          <div className="container-fluid">
            <Nav>
              <div className="row">
                <div className="col-sm-12">
                  <NavDropdown className="navDropdown" eventKey={3} title="Hår" id="basic-nav-dropdow">
                    <Link to="/ChooseSaloon">Klippa</Link>
                    <Link to="/ChooseSaloon">Slinga</Link>
                    <Link to="/ChooseSaloon">Färga</Link>
                    <Link to="/ChooseSaloon">Rensa skägg</Link>
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
