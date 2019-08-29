import React from 'react';
import HikesList from './HikesList';

// css
import './Display.css';

const Display = props => {
  const hikesArray = props.hikes;

  return (
    <div className="display">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <HikesList listofHikes={hikesArray} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
