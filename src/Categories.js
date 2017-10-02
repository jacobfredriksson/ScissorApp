import React, { Component } from 'react';
import './css/Categories.css'
import { NavDropdown, Nav} from 'react-bootstrap';
import {HashRouter, Link} from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Nav>
            <div className="categories-container">
              <NavDropdown className="navDropdown" eventKey={3} title="HÅR" id="basic-nav-dropdow">
                <Link to="/Choosesalon">Klippa</Link>
                <Link to="/Choosesalon">Slinga</Link>
                <Link to="/Choosesalon">Färga</Link>
                <Link to="/Choosesalon">Putsa</Link>
              </NavDropdown>
            </div>

            <div className="categories-container">
              <NavDropdown className="navDropdown" eventKey={3} title="NAGLAR" id="basic-nav-dropdown">
                <Link to="/Choosesalon">Alt1</Link>
                <Link to="/Choosesalon">Alt2</Link>
                <Link to="/Choosesalon">Alt3</Link>
                <Link to="/Choosesalon">Alt4</Link>
              </NavDropdown>
            </div>

            <div className="categories-container">
              <NavDropdown className="navDropdown" eventKey={3} title="HUD" id="basic-nav-dropdown">
                <Link to="/Choosesalon">Alt1</Link>
                <Link to="/Choosesalon">Alt2</Link>
                <Link to="/Choosesalon">Alt3</Link>
                <Link to="/Choosesalon">Alt4</Link>
              </NavDropdown>
            </div>

            <div className="categories-container">
              <NavDropdown className="navDropdown" eventKey={3} title="MASSAGE" id="basic-nav-dropdown">
                <Link to="/Choosesalon">Alt1</Link>
                <Link to="/Choosesalon">Alt2</Link>
                <Link to="/Choosesalon">Alt3</Link>
                <Link to="/Choosesalon">Alt4</Link>
              </NavDropdown>
            </div>

            <div className="categories-container">
              <NavDropdown className="navDropdown" eventKey={3} title="ANSIKTE" id="basic-nav-dropdown">
                <Link to="/Choosesalon">Alt1</Link>
                <Link to="/Choosesalon">Alt2</Link>
                <Link to="/Choosesalon">Alt3</Link>
                <Link to="/Choosesalon">Alt4</Link>
              </NavDropdown>
            </div>
          </Nav>
        </div>
      </HashRouter>
    );
  }
}
