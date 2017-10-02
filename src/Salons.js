import React, { Component } from 'react';
import './css/Salons.css';
import BackArrow from './BackArrow';
import IphoneTop from './IphoneTop';
import {HashRouter, Link} from 'react-router-dom';

export default class salons extends Component {



  render() {
    return (
      <HashRouter>
        <div>
          <IphoneTop />
          <img className="heart" src={require("./Images/heart.png")} alt="heart"/>
          <img className="stars" src={require("./Images/stars.png")} alt="stars"/>

          <Link to="/Choosesalon" className="arrow-highlight">
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
              this.props.selectedsalon.map((el, i) =>
              <div>
                <p className="number"> {el.rating}</p>
                <h3 className="type-of-salon"> {el.name} </h3>
                  <div className="salon-info">
                    <p className="salon-border"> <img className="find-salon" src={require("./Images/find.png")} alt="find-icon"/>{el.adress}, <span>{el.zip} </span></p>
                    <p className="salon-border"> <img className="watch-salon" src={require("./Images/watch.png")} alt="watch-icon"/>{el.open} </p>
                    <p className="salon-border"> <img className="phone-salon" src={require("./Images/phone.png")} alt="phone-icon"/>{el.tel} </p>
                    <p className="salon-border"> <img className="web-salon" src={require("./Images/worldwideweb.png")} alt="wwww-icon"/>{el.site} </p>
                    <p className="salon-desc"> {el.desc} </p>
                  </div>
              </div>
            )
            }
        </div>
      </HashRouter>
    );
  }
}
