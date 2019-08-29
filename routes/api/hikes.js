const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res) => {
  axios
    .get('https://www.hikingproject.com/data/get-trails', {
      params: {
        key: '200518201-a8a901b7dd0abe3ddf1f188778e8e7e8',
        lat: req.body.lat,
        lon: req.body.lon,
        maxResults: 50
      }
    })
    .then(response => {
      const initialSetOfTrails = response.data.trails;

      initialSetOfTrails.forEach(trail => {});

      const filteredTrails = [];

      let counter = 0;

      while (filteredTrails.length < 10) {
        let trail = initialSetOfTrails[counter];

        if (trail.length < req.body.length) {
          filteredTrails.push(trail);
        }
        counter++;
      }

      res.json(filteredTrails);
    });
});

module.exports = router;
