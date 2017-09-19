import React, { Component } from 'react';
import './css/Saloons.css';
import BackArrow from './BackArrow';
import IphoneTop from './IphoneTop';
import {HashRouter, Link} from 'react-router-dom';

export default class Saloons extends Component {



  render() {
    return (
      <HashRouter>
        <div>

          <IphoneTop />

          <img className="heart" src="        https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/heart.png?raw=true" alt="heart"/>

          <img className="stars" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/stars.png?raw=true" alt="stars"/>

          <p className="number"> {this.props.salonger.rating}</p>


          <BackArrow />

          <h3 className="type-of-saloon"> {this.props.salonger.name} </h3>

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

            <div className="saloon-info">
              <p className="saloon-border"> <img className="find-saloon" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/find.png?raw=true" alt="find-icon"/>{this.props.salonger.adress}, <span>{this.props.salonger.zip} </span></p>
              <p className="saloon-border"> <img className="watch-saloon" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/watch.png?raw=true" alt="watch-icon"/>{this.props.salonger.open} </p>
              <p className="saloon-border"> <img className="phone-saloon" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/phone.png?raw=true" alt="phone-icon"/>{this.props.salonger.tel} </p>
              <p className="saloon-border"> <img className="web-saloon" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/worldwideweb.png?raw=true" alt="wwww-icon"/>{this.props.salonger.site} </p>
              <p className="saloon-desc"> {this.props.salonger.desc} </p>
            </div>

        </div>
      </HashRouter>
    );
  }
}
