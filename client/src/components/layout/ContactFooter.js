import React from 'react';

let footerStyle = {
  fontWeight: '100'
};

export default function ContactFooter() {
  return (
    <div>
      <section id="newsletter" className="bg-dark">
        <div className="container text-white text-center py-5">
          <p className="lead">JOIN OUR NEWSLETTER</p>
          <div className="row justify-content-center">
            <div className="col-10 col-sm-8 col-md-6 col-lg-4">
              <form action="" className="form-inline">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your email"
                  />
                  <div className="input-group-append">
                    <button className="btn-btn-primary">JOIN NOW</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="footer" className="bg-secondary pd-3" style={footerStyle}>
        <ul className="nav text-center justify-content-center flex-column flex-sm-row">
          <li className="nav-item">
            <a href="" className="nav-link text-white">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-white">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-white">
              FEATURED HIKES
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link text-white">
              GET READY
            </a>
          </li>
          <li className="nav-item">
            <a
              href=""
              className="nav-link text-white"
              data-toggle="modal"
              data-target="#bookingModal"
            >
              TRIP PLANNING
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
