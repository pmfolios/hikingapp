import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//img
import Background from '../../images/headline/main-pic.jpg';
// Photo by Kalen Emsley on Unsplash

let sectionStyle = {
  background: `url(${Background}) bottom center / cover no-repeat`,
  minHeight: '700px',
  position: 'relative'
};

let headlineH1Style = {
  fontFamily: 'Montserrat',
  fontSize: '4rem',
  fontWeight: '400',
  lineHeight: '1',
  zIndex: '2'
};

class Headline extends Component {
  //difficulty, length, location (within 30 miles)
  state = {
    difficulty: 'easy',
    length: '5',
    location: 'userLocation'
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section
        className="d-flex justify-content-center align-items-center"
        id="headline"
        style={sectionStyle}
      >
        <div id="overlay">
          <div className="container text-white text-center" id="header">
            <h1 className="display-1" style={headlineH1Style}>
              TRAILHEAD APP
            </h1>
            <h5 className="modal-title">Find a hike nearby</h5>
            <br />
            <p>
              We'll use your current location to find awesome hikes near you!
            </p>
          </div>
          <div className="modal-body text-white">
            <form>
              <div className="form-group">
                <label htmlFor="difficulty">Difficulty</label>
                <select
                  className="form-control"
                  id="difficulty"
                  name="difficulty"
                  value={this.state.difficulty}
                  onChange={this.onChange}
                >
                  <option value="easy">Easy</option>
                  <option value="med">Medium</option>
                  <option value="diff">Difficult</option>
                  <option value="veryDiff">Very Difficult</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="length">Length</label>
                <select
                  className="form-control"
                  id="length"
                  name="length"
                  value={this.state.length}
                  onChange={this.onChange}
                >
                  <option value="5">0-5</option>
                  <option value="8">5-8</option>
                  <option value="10">8-10</option>
                  <option value="100">10+</option>
                </select>
              </div>
              {/*<div className="form-group">
                <label htmlFor="location">Location</label>
                <select
                  className="form-control"
                  id="location"
                  //
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                >
                  <option value="userLocation">Use my location</option>
                  <option value="colo">Colorado</option>
                  <option value="northCal">Northern California</option>
                  <option value="northCar">North Carolina</option>
                </select>
              </div>*/}
            </form>
          </div>
          <div className="modal-footer justify-content-center">
            <Link
              id="hikeSearch"
              to={{
                pathname: 'activities',
                state: {
                  difficulty: this.state.difficulty,
                  length: this.state.length,
                  location: this.state.location
                }
              }}
              className="btn btn-primary"
            >
              Find Hikes!
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Headline;
