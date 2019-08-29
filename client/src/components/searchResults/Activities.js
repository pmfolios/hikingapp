import React, { Component } from 'react';
import axios from 'axios';

import Display from './Display';
import Spinner from './Spinner';

class Activities extends Component {
  state = {
    hikes: [],
    errMsg: ''
  };

  getHikesTest(latFromGeo, lonFromGeo, difficultyFromReq, lengthFromReq) {
    const hikeRequestDetails = {
      lat: latFromGeo,
      lon: lonFromGeo,
      difficulty: difficultyFromReq,
      length: lengthFromReq
    };

    axios
      .post('api/hikes', hikeRequestDetails)
      .then(response => {
        this.setState({
          hikes: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  componentDidMount() {
    let { difficulty, length, location } = this.props.location.state;

    length = parseInt(length);

    if (location === 'userLocation') {
      window.navigator.geolocation.getCurrentPosition(
        location =>
          this.getHikesTest(
            location.coords.latitude,
            location.coords.longitude,
            difficulty,
            length
          ),

        err => this.setState({ errMsg: err.message }),
        { timeout: 10000 }
      );
    } else {
      this.setState({
        errMsg: 'not using user location is not currently supported'
      });
    }
  }

  content() {
    if (this.state.hikes && !this.state.errMsg) {
      return <Display hikes={this.state.hikes} />;
    } else if (!this.state.lat && this.state.errMsg) {
      return <div>Error: {this.state.errMsg}</div>;
    } else if (!this.state.lat && !this.state.errMsg) {
      return <Spinner message="Please accept location request" />;
    }
  }

  render() {
    return (
      <div className="app-wide-background">
        <div>{this.content()}</div>
      </div>
    );
  }
}

export default Activities;
