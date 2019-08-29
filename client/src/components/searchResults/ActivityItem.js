import React from 'react';
import { Link } from 'react-router-dom';

import './ActivityItem.css';

const ActivityItem = props => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="hike-img">
          <img src={props.pic} alt="hike img" className="card-img-top" />
          <div className="img-caption">
            <text>{props.name}</text>
          </div>
        </div>

        <div className="card-body">
          <p className="card-text">
            To text your friends directions and go click the button below!
          </p>
          <div
            className="
          d-flex justify-content-center"
          >
            <div className="btn-group">
              <Link to={'/comingsoon'} className="btn btn-success">
                Let's Go Hiking!
              </Link>
            </div>
          </div>
          <div className="hike-summary">
            <small className="text-muted">{props.summary}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
