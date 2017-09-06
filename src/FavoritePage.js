import React, { Component } from 'react';
// import './css/HomeButton.css'
import BackButton from './BackButton'

export default class FavoritePage extends Component {


  render() {
    return (
      <div>
        <p> Välkommen till Favorit salonger </p>
        <BackButton className={this.props.className}/>
      </div>
    );
  }
}
