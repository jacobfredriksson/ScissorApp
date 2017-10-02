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
          <img className="heart" src={require("./Images/heart.png")} alt="heart"/>
          <img className="stars" src={require("./Images/stars.png")} alt="stars"/>

          <Link to="/ChooseSaloon">
            <BackArrow />
          </Link>

          <div className="info-schedule-container">
            <div className="info-schedule">
              <a>Info</a>
            </div>

            <div className="info-schedule">
              <a>Schema</a>
            </div>
          </div>

            {
              this.props.selectedSaloon.map((el, i) =>
              <div>
                <p className="number"> {el.rating}</p>
                <h3 className="type-of-saloon"> {el.name} </h3>
                  <div className="saloon-info">
                    <p className="saloon-border"> <img className="find-saloon" src={require("./Images/find.png")} alt="find-icon"/>{el.adress}, <span>{el.zip} </span></p>
                    <p className="saloon-border"> <img className="watch-saloon" src={require("./Images/watch.png")} alt="watch-icon"/>{el.open} </p>
                    <p className="saloon-border"> <img className="phone-saloon" src={require("./Images/phone.png")} alt="phone-icon"/>{el.tel} </p>
                    <p className="saloon-border"> <img className="web-saloon" src={require("./Images/worldwideweb.png")} alt="wwww-icon"/>{el.site} </p>
                    <p className="saloon-desc"> {el.desc} </p>
                  </div>
              </div>
            )
            }
        </div>
      </HashRouter>
    );
  }
}
