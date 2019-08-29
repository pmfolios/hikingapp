import React from 'react';

import { Link } from 'react-router-dom';

// img
import yosemiteImg from '../../images/destination/half-dome.jpg';
import aspenImg from '../../images/destination/four-pass-loop.jpg';
import ashevilleImg from '../../images/destination/macrae-peak.jpg';

import baxterImg from '../../images/destination/baxter.jpg';
// Photo by James Fitzgerald on Unsplash

import glacierImg from '../../images/destination/glacier.jpg';
//Photo by Tony Reid on Unsplash

import horseshoeBendImg from '../../images/destination/horseshoe-bend.jpg';
//Photo by Gert Boers on Unsplash

import cascadeMtnsImg from '../../images/destination/cascade-mtns.jpg';
//Photo by Dan Meyers on Unsplash

import awaawapuhiImg from '../../images/destination/awaawapuhi.jpg';
//Photo by Scott Goodwill on Unsplash

export default function TripSuggestion() {
  return (
    <div>
      <section>
        <div className="container text-center mt-5">
          <h3>TRAVELING TO ANOTHER CITY?</h3>
          <h5 className="text-primary">BROWSE HIKES BY LOCATION</h5>
          <div className="row mt-4">
            <div className="col-6 col-lg-3 mb-4">
              <h5>Yosemite, CA</h5>
              <Link to={'/comingsoon'}>
                <img src={yosemiteImg} alt="yosemite img" />
              </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <h5>Aspen, CO</h5>
              <Link to={'/comingsoon'}>
                <img src={aspenImg} alt="aspen img" />
              </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <h5>Asheville, NC</h5>
              <Link to={'/comingsoon'}>
                <img src={ashevilleImg} alt="asheville img" />
              </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <h5>Baxter State Park, ME</h5>
              <Link to={'/comingsoon'}>
                <img src={baxterImg} alt="baxter img" />
              </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <h5>Glacier Nat'l Park, MT</h5>
              <Link to={'/comingsoon'}>
                <img src={glacierImg} alt="glacier img" />
              </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <h5>Marble Canyon, AZ</h5>
              <Link to={'/comingsoon'}>
                <img src={horseshoeBendImg} alt="horseshoeBend img" />
              </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <h5>Cascade Range, OR</h5>
              <Link to={'/comingsoon'}>
                <img src={cascadeMtnsImg} alt="cascadeMtns img" />
              </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
              <h5>Awa'awapuhi, HI</h5>
              <Link to={'/comingsoon'}>
                <img src={awaawapuhiImg} alt="awaawapuhi img" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
