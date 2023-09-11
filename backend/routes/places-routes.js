const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Emp Building",
    description: "One of the most famous sky scrapers in the world",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  }
];

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    return res.status(404).json({message: 'Could not find a place for the provided id.'});
  }

  res.json({place}); // => { place } => { place: place }
}
);

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });

  if (!place) {
    return res.status(404).json({message: 'Could not find a place for the provided user id.'});
  }
  res.json({place});
});

module.exports = router;