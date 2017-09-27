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

          <IphoneTop className=""/>

          <img className="heart" src={require("./Images/heart.png")} alt="heart"/>

          <img className="stars" src={require("./Images/stars.png")} alt="stars"/>

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


            <div className="saloon-info">
              <p className="saloon-border"> <img className="find-saloon" src={require("./Images/find.png")} alt="find-icon"/>{this.props.salonger.adress}, <span>{this.props.salonger.zip} </span></p>
              <p className="saloon-border"> <img className="watch-saloon" src={require("./Images/watch.png")} alt="watch-icon"/>{this.props.salonger.open} </p>
              <p className="saloon-border"> <img className="phone-saloon" src={require("./Images/phone.png")} alt="phone-icon"/>{this.props.salonger.tel} </p>
              <p className="saloon-border"> <img className="web-saloon" src={require("./Images/worldwideweb.png")} alt="wwww-icon"/>{this.props.salonger.site} </p>
              <p className="saloon-desc"> {this.props.salonger.desc} </p>
            </div>

        </div>
      </HashRouter>
    );
  }
}
