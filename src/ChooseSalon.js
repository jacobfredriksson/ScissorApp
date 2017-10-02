import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom';
import './css/ChooseSalon.css';
import IphoneTop from './IphoneTop';
import BackArrow from './BackArrow';
import DownArrow from './DownArrow';
import RightArrow from './RightArrow';
import Rating from './Rating';

export default class Choosesalon extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <img className="filter-menu" src={require("./Images/burger.png")} alt="expanding filter button"/>
          <IphoneTop />
          <Link to="/" className="arrow-highlight">
            <BackArrow />
          </Link>
          <DownArrow className="down-arrow"/>
          <h1 className="header-title"> Hår </h1>
          <div className="price-box">
            <select className="price-interval"
                    onChange={this.props.updatePrice.bind(this)}>
              <option> För att sortera efter pris klicka här </option>
              <option value="0-149"> Pris: 0-149 </option>
              <option value="150-249"> Pris 150-249 </option>
              <option value="250-499"> Pris 250-499 </option>
              <option value="500-800"> Pris 500-1000 </option>
            </select>
          </div>
          {
            this.props.filtredsalons.map((el, i) =>
            <div className="salon-data" key={i}>
              <span className="time-choose-salon">{el.time}</span>
              <span className="name-choose-salon">{el.name}</span>
              <span className="price-choose-salon">{el.price}</span>
              <span className="rightArrow-choose-salon">
                <Link to="/salons"
                  onClick={(e) => this.props.selectsalon(e, el)}
                  choosensalon={this.props.choosensalon}>
                  <RightArrow />
                </Link>
              </span>
              <span className="stars-choose-salon">
                <Rating />
              </span>
              <span className="rating-choose-salon">{el.rating}</span>
              <span className="timeEst-choose-salon">{el.timeEst}</span>
              <p className="adress-choose-salon">{el.adress}</p>
            </div>
          )
          }
        </div>
      </HashRouter>
    );
  }
}
