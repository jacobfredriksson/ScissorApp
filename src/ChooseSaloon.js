import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom';
import './css/ChooseSaloon.css';
import IphoneTop from './IphoneTop';
import BackArrow from './BackArrow';
import DownArrow from './DownArrow';
import RightArrow from './RightArrow';
import Rating from './Rating';

export default class ChooseSaloon extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <img className="filter-menu" src={require("./Images/burger.png")} alt="expanding filter button"/>
          <IphoneTop />
          <Link to="/">
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
            this.props.filtredSaloons.map((el, i) =>
            <div className="saloon-data" key={i}>
              <span className="time-choose-saloon">{el.time}</span>
              <span className="name-choose-saloon">{el.name}</span>
              <span className="price-choose-saloon">{el.price}</span>
              <span className="rightArrow-choose-saloon">
                <Link to="/Saloons"
                  onClick={(e) => this.props.selectSaloon(e, el)}
                  choosenSaloon={this.props.choosenSaloon}>
                  <RightArrow />
                </Link>
              </span>
              <span className="stars-choose-saloon">
                <Rating />
              </span>
              <span className="rating-choose-saloon">{el.rating}</span>
              <span className="timeEst-choose-saloon">{el.timeEst}</span>
              <p className="adress-choose-saloon">{el.adress}</p>
            </div>
          )
          }
        </div>
      </HashRouter>
    );
  }
}
