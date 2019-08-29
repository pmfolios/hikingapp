import React from 'react';

import { Link } from 'react-router-dom';

//img
import hikingSuppliesImg from '../../images/carousel/hiking-supplies.jpg';
//Photo by Alice Donovan Rouse on Unsplash

import waterBottleImg from '../../images/carousel/water-bottle.jpg';
//Photo by Alan Carrillo on Unsplash

import onTheHikeImg from '../../images/carousel/on-the-hike.jpg';
//Photo by Andrew Ly on Unsplash

export default function Carousel() {
  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-7 mb-3">
              <div
                id="mainCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={hikingSuppliesImg}
                      alt=""
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={waterBottleImg}
                      alt=""
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img src={onTheHikeImg} alt="" className="d-block w-100" />
                  </div>
                </div>
                <a
                  href="#mainCarousel"
                  className="carousel-control-prev"
                  data-slide="prev"
                  role="button"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  href="#mainCarousel"
                  className="carousel-control-next"
                  data-slide="next"
                  role="button"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <h3>PREPARE FOR YOUR HIKE</h3>
              <h5 className="text-primary">#HIKINGTIPS</h5>
              <Link to={'/comingsoon'}>
                See tips
                <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
