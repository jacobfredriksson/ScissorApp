import React, { Component } from 'react';
import './css/Saloons.css';
import BackButton from './BackButton';
import BackArrow from './BackArrow';
import {HashRouter, Link} from 'react-router-dom';

export default class Saloons extends Component {



  render() {
    return (
      <HashRouter>
        <div>

          <img className="itopbar" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/itopbar.png?raw=true"/>

          <img className="heart" src="        https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/heart.png?raw=true"/>

          <img className="stars" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/stars.png?raw=true"/>


          <BackArrow />


          <div className="info-schedule-container">
            <div className="info-schedule">
              <Link to="/">Info</Link>
            </div>

            <div className="info-schedule">
              <Link to="/">Schema</Link>
            </div>
          </div>


          {/* <h1 className="text-center"> Sallonger </h1>
          <div className="row Price-box">
            <p className="col-sm-8 price-interval"> Pris 250-500 kr </p>
          </div> */}
          {
            this.props.salonger.map((salongerna, i) =>
            <div className="">
              <p className="saloon-name"> {salongerna.name} </p>
            </div>
            )
          }
        </div>
      </HashRouter>
    );
  }
}
