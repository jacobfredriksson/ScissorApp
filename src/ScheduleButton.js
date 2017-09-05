import React, { Component } from 'react';
import './css/ScheduleButton.css'

export default class ScheduleButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={() => this.props.schedule()} className={this.props.className} name={this.props.name}>Lediga tider</button>
    );
  }
}
