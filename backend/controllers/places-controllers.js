
const HttpError = require('../models/http-error');

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

const getPlacesById = (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find a place for the provided id.', 404);
  }

  res.json({place}); // => { place } => { place: place }
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });

  if (!place) {
    return next(new HttpError('Could not find a place for the provided user id.', 404));
  }
  res.json({place});
}

exports.getPlacesById = getPlacesById;
exports.getPlacesByUserId = getPlacesByUserId;