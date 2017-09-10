import React, { Component } from 'react';
import BackButton from './BackButton'

export default class SchedulePage extends Component {


  render() {
    return (
      <div>
        <p> Välkommen till Lediga tider </p>
        <BackButton className={this.props.className}/>
      </div>
    );
  }
}
