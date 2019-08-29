import React from 'react';
import ActivityItem from './ActivityItem';

const HikesList = props => {
  const { listofHikes } = props;

  return listofHikes.map(singleHikeObj => {
    return (
      <ActivityItem
        key={singleHikeObj.id}
        name={singleHikeObj.name}
        summary={singleHikeObj.summary}
        conditionDetails={singleHikeObj.conditionDetails}
        pic={singleHikeObj.imgMedium}
      />
    );
  });
};

export default HikesList;
