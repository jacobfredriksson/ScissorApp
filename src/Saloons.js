import React, { Component } from 'react';
import './css/Saloons.css'
import BackButton from './BackButton'

export default class Saloons extends Component {



  render() {
    return (
      <div>
        <div className="Price-box">
          <p className="price-interval"> Pris 250-500 kr </p>
        </div>
        <p> Välkommen till salongen </p>
        <BackButton />
      </div>
    );
  }
}
