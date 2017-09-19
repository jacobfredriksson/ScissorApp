import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom';
import './css/ChooseSaloon.css';
import IphoneTop from './IphoneTop';
import BackArrow from './BackArrow';
import DownArrow from './DownArrow';
import Rating from './Rating';

export default class ChooseSaloon extends Component {

  render() {
    return (
      <HashRouter>
        <div>

          <img className="filter-menu" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/burger.png?raw=true"/>
          <IphoneTop />
          <BackArrow />
          <DownArrow />
          <h1 className="header-title"> Hår </h1>
          <div className="row price-box">
            <p className="price-interval"> Pris 250-500 kr </p>
          </div>

          <div className="saloon-data">
            <span className="time-choose-saloon">{this.props.salonger.time}</span> <span className="name-choose-saloon">{this.props.salonger.name}</span>
            <span className="price-choose-saloon">{this.props.salonger.price } </span>
            <span className="stars-choose-saloon"> <Rating /></span>
            <span className="rating-choose-saloon">{this.props.salonger.rating}</span>
            <span className="timeEst-choose-saloon"> {this.props.salonger.timeEst}</span>
            <p className="adress-choose-saloon">{this.props.salonger.adress}</p>


          </div>
        </div>
      </HashRouter>
    );
  }
}
