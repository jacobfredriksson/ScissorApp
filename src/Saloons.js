import React, { Component } from 'react';
import BackButton from './BackButton'

export default class Saloons extends Component {



  render() {
    return (
      <div>
        <p> Välkommen till salongen </p>
        <BackButton className={this.props.className}/>
      </div>
    );
  }
}
