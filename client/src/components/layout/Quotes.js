import React from 'react';

let quoteIconStyle = {
  opacity: '0.1'
};

export default function Quotes() {
  return (
    <div>
      <section id="quotes">
        <div className="container text-center mt-4">
          <h3>WHAT OUR HAPPY CAMPERS ARE SAYING</h3>
          <div className="row">
            <div className="col-md-4 my-2">
              <i
                className="fas fa-quote-left fa-2x text-primary mb-3"
                style={quoteIconStyle}
              />
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt nostrum sapiente unde beatae.
                </p>
                <footer className="blockquote-footer">Mark Twain</footer>
              </blockquote>
            </div>
            <div className="col-md-4 my-2">
              <i
                className="fas fa-quote-left fa-2x text-primary mb-3"
                style={quoteIconStyle}
              />
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt nostrum sapiente unde beatae.
                </p>
                <footer className="blockquote-footer">Mark Twain</footer>
              </blockquote>
            </div>
            <div className="col-md-4 my-2">
              <i
                className="fas fa-quote-left fa-2x text-primary mb-3"
                style={quoteIconStyle}
              />
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt nostrum sapiente unde beatae.
                </p>
                <footer className="blockquote-footer">Mark Twain</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
