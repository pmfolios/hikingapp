import React from 'react';

//img
import settingsImg from '../../images/icons/settings.png';
import compassImg from '../../images/icons/compass.png';
import hikingImg from '../../images/icons/hiking.png';

export default function About() {
  return (
    <div>
      <section id="">
        <div className="container text-center mt-5">
          <h2>GET TO THE TRAIL HEAD IN 3 EASY STEPS</h2>
          <div className="row">
            <div className="col-md-4 pd-3">
              <img
                src={settingsImg}
                alt="settings icon"
                className="img-fluid d-none d-md-inline"
              />
              <h3>Decide on Type</h3>
              <p className="lead">
                Pick length and difficulty to filter the hikes you're looking
                for
              </p>
            </div>
            <div className="col-md-4 pd-3">
              <img
                src={compassImg}
                alt="compass icon"
                className="img-fluid d-none d-md-inline"
              />
              <h3>Search for hikes</h3>
              <p className="lead">
                Once you've decided on the type of hike you want, click Find
                Hikes
              </p>
            </div>
            <div className="col-md-4 pd-3">
              <img
                src={hikingImg}
                alt="hiking icon"
                className="img-fluid d-none d-md-inline"
              />
              <h3>Get Directions & Go!</h3>
              <p className="lead">You're all set! See you at the trailhead!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
