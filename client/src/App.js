import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Internal
import Navbar from './components/layout/Navbar';
import ContactFooter from './components/layout/ContactFooter';

import Landing from './Landing';
import Activities from './components/searchResults/Activities';
import ComingSoon from './components/comingsoon/ComingSoon';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/comingsoon" component={ComingSoon} />
          <ContactFooter />
        </div>
      </Router>
    );
  }
}

export default App;
