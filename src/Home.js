import React, { Component } from 'react';
import ScheduleButton from './ScheduleButton';
import HomeButton from './HomeButton';
import FavoriteButton from './FavoriteButton';
import BookingButton from './BookingButton';
import ProfileButton from './ProfileButton';
import LoginButton from './LoginButton';

export default class Home extends Component {

  render() {
    return (
      <div className="text-center start-button">
        <ScheduleButton className="btn btn-success all-buttons"
                        schedule={this.props.schedule.bind(this)}
        />
        <HomeButton className="btn btn-success all-buttons"
                    saloon={this.props.saloon.bind(this)}
                    home={this.props.home}
        />
        <FavoriteButton className="btn btn-success all-buttons"
                        favorite={this.props.favorite.bind(this)}
        />
        <BookingButton className="btn btn-success all-buttons"
                       booking={this.props.booking.bind(this)}
        />
        <ProfileButton className="btn btn-success all-buttons"
                       profile={this.props.profile.bind(this)}
                       frontPage={this.props.frontPage.bind(this)}
        />
        <LoginButton className="btn btn-success all-buttons"
                     login={this.props.login.bind(this)}
        />
      </div>
    );
  }
}
