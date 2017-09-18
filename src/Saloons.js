import React, { Component } from 'react';
import './css/Saloons.css';
import BackButton from './BackButton';
import BackArrow from './BackArrow';

export default class Saloons extends Component {



  render() {
    return (
      <div>

        <img className="itopbar" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/leftarrowbig.png?raw=true"/>
        <BackArrow />
        {/* <h1 className="text-center"> Sallonger </h1>
        <div className="row Price-box">
          <p className="col-sm-8 price-interval"> Pris 250-500 kr </p>
        </div>
        {
          this.props.salonger.map((salongerna, i) =>
          <div>
            <h1> {salongerna.name} </h1>
          </div>
          )
        }  */}
        <BackButton />
      </div>
    );
  }
}
