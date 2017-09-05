import React, { Component } from 'react';
import './css/FavoriteButton.css'

export default class FavoriteButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={() => this.props.favorite()} className={this.props.className} name={this.props.name}>Favoriter</button>
    );
  }
}
