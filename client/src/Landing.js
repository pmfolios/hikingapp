import React, { Component } from 'react';

// Internal
import Headline from './components/layout/Headline';
import About from './components/layout/About';
import FeaturedHikes from './components/layout/FeaturedHikes';
import Carousel from './components/layout/Carousel';
import TripSuggestion from './components/layout/TripSuggestion';

class Landing extends Component {
  render() {
    return (
      <div>
        <Headline />
        <About />
        <FeaturedHikes />
        <Carousel />
        <TripSuggestion />
      </div>
    );
  }
}

export default Landing;
