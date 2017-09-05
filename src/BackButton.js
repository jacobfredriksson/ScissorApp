import React, { Component } from 'react';

export default class BackButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

        <button onClick={() => this.props.frontPage()} className={this.props.className} name={this.props.name}>Backa</button>
      </div>
    );
  }
}
