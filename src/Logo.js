import React, { Component } from 'react';
import './css/Logo.css'

export default class Home extends Component {

  render() {
    return (

        <div className="row">
          <div className="col-sm-12">
            <img className="img-responsive logo" src="https://github.com/jacobfredriksson/ScissorApp/blob/master/Resources/Images/hair.png?raw=true" alt="Logo"/>
          </div>
        </div>

    );
  }
}
