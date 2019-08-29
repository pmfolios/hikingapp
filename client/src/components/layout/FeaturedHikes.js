import React from 'react';

import { Link } from 'react-router-dom';

// img
import halfdomeImg from '../../images/featuredHikes/half-dome.jpg';
import fourpassloopImg from '../../images/featuredHikes/four-pass-loop.jpg';
import macraepeakImg from '../../images/featuredHikes/macrae-peak.jpg';

export default function FeaturedHikes() {
  return (
    <div>
      <section id="">
        <div className="container text-center mt-2 pd-3">
          <h3>BROWSE A FEATURED HIKE</h3>
          <p className="lead">
            From the San Fran Bay area to Colorado to North Carolina check out
            one of our featured hikes from across the country!
          </p>
          <div className="row m-2">
            <div className="col-md-4 p-3">
              <div className="card">
                <img src={halfdomeImg} alt="" className="card-img-top" />
                {/*Photo by Jeff Finley on Unsplash*/}
                <div className="card-body">
                  <h2 className="card-title text-primary">
                    HALF DOME | YOSEMITE, CA
                  </h2>
                  <p className="card-text">
                    The premier route in Yosemite National Park. An iconic
                    journey awaits.
                  </p>
                  <Link
                    to={'/comingsoon'}
                    className="btn btn-lg btn-outline-primary"
                  >
                    Go There
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card">
                <img src={fourpassloopImg} alt="" className="card-img-top" />
                {/*Photo by Evan Wise on Unsplash*/}
                <div className="card-body">
                  <h2 className="card-title text-primary">
                    FOUR PASS LOOP | ASPEN, CO
                  </h2>
                  <p className="card-text">
                    Breath-taking views of the famous Maroon Bells. An amazing
                    journey up over 4 different 12,000 ft passes.
                  </p>
                  <Link
                    to={'/comingsoon'}
                    className="btn btn-lg btn-outline-primary"
                  >
                    Go There
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card">
                <img src={macraepeakImg} alt="" className="card-img-top" />
                {/*Photo by Kevin Crosby on Unsplash*/}
                <div className="card-body">
                  <h2 className="card-title text-primary">
                    MACRAE PEAK | GLEN ALPINE, NC
                  </h2>
                  <p className="card-text">
                    Heart pumping and exhilarating. This beautiful hike is
                    challenging and a lot of fun.
                  </p>
                  <Link
                    to={'/comingsoon'}
                    className="btn btn-lg btn-outline-primary"
                  >
                    Go There
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
