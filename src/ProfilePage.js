import React, { Component } from 'react';
import BackButton from './BackButton'

export default class ProfilePage extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <p> Välkommen till Profilen </p>
        <BackButton className="btn btn-success"
        />
      </div>
    );
  }
}
